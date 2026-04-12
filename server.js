const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// 🔥 ENV CHECK
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing EMAIL_USER or EMAIL_PASS in environment variables");
}

// 🔥 QUEUE
const emailQueue = [];

// 📧 EMAIL CONFIG
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ ROOT
app.get("/", (req, res) => {
  res.send("Email system running with Queue 🚀");
});

// 🚀 UPLOAD CSV → ADD TO QUEUE
app.post("/send-emails", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded ❌");
  }

  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {

      // 👉 ADD TO QUEUE
      results.forEach(user => emailQueue.push(user));

      console.log("📥 Added to queue:", results.length);

      // 🔥 CLEANUP FILE
      fs.unlinkSync(req.file.path);

      res.send("Emails added to queue ✅");
    });
});

// 🚀 QUEUE WORKER
setInterval(async () => {

  if (emailQueue.length === 0) return;

  const user = emailQueue.shift();

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Queued Email 🚀",
      text: `Hi ${user.name}, this is a queued email`
    });

    console.log("✅ Sent:", user.email);

  } catch (err) {
    console.log("❌ Failed:", user.email, err.message);
  }

}, 3000); // send every 3 seconds

// 🚀 START SERVER (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});