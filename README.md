# 📧 Email Processing Microservice

A backend email processing system built using **Node.js** and **Express.js** that accepts CSV uploads, parses recipient data, and sends personalized emails using a queue-based asynchronous processing architecture.

This project demonstrates backend software engineering concepts including REST APIs, file uploads, CSV parsing, queue-based processing, email automation, SMTP integration, and fault-tolerant system design.

---

## 🚀 Live Demo

**GitHub Repository:** https://github.com/Karthikeya172001/email-system

🎥 **Demo Video:** https://drive.google.com/file/d/1W1ZrSyZpDY4odY31NQ-eMprbOrIENtPM/view?usp=drivesdk

---

## ✨ Features

- REST API for CSV file upload
- CSV parsing and validation
- Personalized email generation
- Queue-based asynchronous email processing
- Sequential email delivery
- SMTP integration using Nodemailer
- Failed email logging
- Simple and modular backend architecture

---

## 🛠 Technologies Used

### Backend

- Node.js
- Express.js

### Libraries

- Nodemailer
- Multer
- csv-parser

### Other Tools

- Git
- GitHub
- Postman

---

## 🏗 Architecture

```text
Client
   │
   ▼
Express REST API
   │
   ▼
Multer
   │
   ▼
CSV Parser
   │
   ▼
In-Memory Queue
   │
   ▼
Email Worker
   │
   ▼
Nodemailer
   │
   ▼
SMTP Server
```

---

## 📂 Project Structure

```text
email-system/
│
├── controllers/
├── middleware/
├── routes/
├── services/
├── uploads/
├── utils/
├── server.js
├── package.json
└── README.md
```

---

## 📄 CSV Format

```csv
name,email
Karthikeya,your_email@gmail.com
John,john@gmail.com
```

---

## 📖 How It Works

1. Upload a CSV file containing recipient information.
2. The Express API receives the request.
3. Multer stores the uploaded file.
4. CSV Parser extracts recipient details.
5. Email requests are added to an in-memory queue.
6. A worker processes emails sequentially.
7. Nodemailer sends emails through the configured SMTP server.

---

## 📡 API Endpoint

### Send Emails

**POST** `/send-emails`

**Content-Type:** `multipart/form-data`

**Form-data Key:** `file`

**Success Response**

```json
{
  "message": "Emails added to queue"
}
```

---

## ⚙ Local Setup

Clone the repository:

```bash
git clone https://github.com/Karthikeya172001/email-system.git
```

Move into the project:

```bash
cd email-system
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server runs at:

```
http://localhost:5001
```

---

## 🔐 SMTP Configuration

Configure Gmail SMTP using an App Password.

```javascript
auth: {
  user: "your_email@gmail.com",
  pass: "your_app_password"
}
```

---

## ⚠ Current Limitations

- Uses an in-memory queue
- No persistent storage
- No retry mechanism
- No authentication
- No frontend dashboard

---

## 🚀 Future Improvements

- Redis + BullMQ integration
- Docker support
- Background worker service
- Retry mechanism
- Persistent queue storage
- Email scheduling
- Monitoring and logging
- Rate limiting
- Authentication and authorization

---

## 👨‍💻 Author

**Gorityala Karthikeya**

📧 Email: gorityalakarthikeya@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/karthikeya-gorityala

💻 GitHub: https://github.com/Karthikeya172001

---

## 📄 License

This project is intended for educational, research, and portfolio purposes.

---

⭐ If you found this project useful, consider giving it a star on GitHub!
