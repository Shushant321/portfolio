require('dotenv').config(); // dotenv को require करें
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();


app.use(cors({
  origin: "http://localhost:3000" 
}));

app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running on port 5000"));

// SMTP transporter setup with environment variables
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,      
    pass: process.env.EMAIL_PASS      
  }
});

contactEmail.verify(error => {
  if (error) {
    console.error("SMTP Verification Error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`.trim();

  const mail = {
    from: process.env.EMAIL_USER,   // sender email address
    to: process.env.EMAIL_USER,     // receiver email address, खुद का email या जैसा चाहें
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ success: false, message: "Failed to send message" });
    }
    res.status(200).json({ success: true, message: "Message sent successfully" });
  });
});
