# 🚀 Email Sending Micro-System

## 📌 Overview

This project is a backend email processing system built using Node.js and Express.

It accepts CSV uploads, parses user data, and sends personalized emails using a queue-based processing approach.

The project demonstrates backend concepts like file handling, email automation, queue processing, and controlled delivery.

---
demo: https://drive.google.com/file/d/1W1ZrSyZpDY4odY31NQ-eMprbOrIENtPM/view?usp=drivesdk

# ⚙️ Tech Stack

- Node.js
- Express.js
- Nodemailer
- Multer
- CSV Parser

---

# ✨ Features

- Upload CSV files with user data
- Parse CSV and extract email details
- Send personalized emails
- Queue-based email processing
- Sequential email delivery
- Basic failed-email logging

---

# 📄 CSV Format

csv id="f1k9xm" name,email Karthikeya,your_email@gmail.com John,john@gmail.com 

---

# 🚀 How It Works

1. User uploads CSV file
2. Server parses CSV data
3. Records are added to an in-memory queue
4. Worker processes emails sequentially
5. Emails are sent using Nodemailer SMTP

---

# 📡 API Endpoint

## Send Emails

http id="m7q2pd" POST /send-emails 

### Request

- Method: POST
- Body: form-data
- Key: file (CSV file)

### Response

text id="r4w8ln" Emails added to queue ✅ 

---

# 🧠 Architecture Flow

text id="v6t1ka" CSV Upload    ↓ Express API    ↓ Multer File Handler    ↓ CSV Parser    ↓ In-Memory Queue    ↓ Email Worker    ↓ Nodemailer    ↓ SMTP Service    ↓ Recipient Inbox 

---

# 🔄 Queue System

This project uses a simple in-memory queue system.

- CSV records are added to a queue
- Emails are processed one by one
- Small delays help control delivery speed

## Benefits

- Prevents sending all emails instantly
- Simulates real-world background processing
- Helps avoid SMTP rate limits

---

# 🧪 Local Setup

bash id="p3y7dc" git clone <repo-url>  cd email-system  npm install  node server.js 

Server runs on:

text id="h8n5vr" http://localhost:5001 

---

# 🔐 Email Configuration

This project uses Gmail SMTP.

## Steps

1. Enable 2-Step Verification
2. Generate Gmail App Password
3. Configure credentials

Example:

javascript id="u2k4zs" auth: {   user: "your_email@gmail.com",   pass: "your_app_password" } 

---

# ⚠️ Limitations

- Uses in-memory queue only
- No persistent storage
- No retry mechanism
- No frontend dashboard

---

# 🚀 Future Improvements

- Redis/Bull queue integration
- Retry mechanism for failed emails
- Email analytics dashboard
- Open/click tracking
- Rate limiting
- Background worker service

---

# 👨‍💻 Author

Karthikeya

---

# 📌 Conclusion

This project demonstrates backend email automation concepts including CSV processing, queue-based delivery, and SMTP integration using Node.