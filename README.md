
## 🎥 Demo

https://drive.google.com/file/d/1W1ZrSyZpDY4odY31NQ-eMprbOrIENtPM/view?usp=drivesdk


# 🚀 Email Processing Microservice

## 📌 Overview

A backend email processing system built using **Node.js** and
**Express.js** that accepts CSV uploads, parses recipient data, and
sends personalized emails using a queue-based processing approach.

This project demonstrates backend engineering concepts including REST
APIs, file handling, CSV parsing, asynchronous processing, email
automation, and SMTP integration.

## 🎥 Demo

https://drive.google.com/file/d/1W1ZrSyZpDY4odY31NQ-eMprbOrIENtPM/view?usp=drivesdk

## ⚙️ Tech Stack

-   Node.js
-   Express.js
-   Nodemailer
-   Multer
-   csv-parser

## ✨ Features

-   REST API for CSV upload
-   CSV parsing and validation
-   Personalized email generation
-   Queue-based asynchronous email processing
-   Sequential email delivery
-   Basic failed-email logging
-   SMTP integration using Nodemailer

## 📂 Project Structure

``` text
email-system/
├── controllers/
├── routes/
├── middleware/
├── services/
├── utils/
├── uploads/
├── server.js
├── package.json
└── README.md
```

## 📄 CSV Format

``` csv
name,email
Karthikeya,your_email@gmail.com
John,john@gmail.com
```

## 🚀 How It Works

1.  User uploads a CSV file.
2.  Express API receives the request.
3.  Multer stores the uploaded file.
4.  CSV parser extracts recipient details.
5.  Records are added to an in-memory queue.
6.  Worker processes emails sequentially.
7.  Emails are sent using Nodemailer through SMTP.

## 📡 API Endpoint

**POST** `/send-emails`

Form-data key: `file`

Response: `Emails added to queue ✅`

## 🧠 Architecture

``` text
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

## 🧪 Local Setup

``` bash
git clone https://github.com/Karthikeya172001/email-system
cd email-system
npm install
node server.js
```

Server: `http://localhost:5001`

## 🔐 Email Configuration

Use Gmail SMTP with an App Password.

``` javascript
auth: {
  user: "your_email@gmail.com",
  pass: "your_app_password"
}
```

## ⚠️ Current Limitations

-   Uses an in-memory queue
-   No persistent storage
-   No retry mechanism
-   No frontend dashboard

## 🚀 Future Improvements

-   Redis/BullMQ integration
-   Docker containerization
-   Retry mechanism
-   Persistent queue storage
-   Background worker service
-   Email scheduling
-   Monitoring and logging
-   Rate limiting

## 👨‍💻 Author

**Gorityala Karthikeya**
