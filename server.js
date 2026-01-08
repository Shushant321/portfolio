require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// CORS
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://portfolio-shushi.netlify.app"
  ]
}));

app.use(express.json());
app.use("/", router);

// ✅ Render ke liye PORT env se lo, 5000 fallback
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Running on port " + PORT));

// ✅ Gmail SMTP ko host + port ke saath try karo
const contactEmail = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,        // screenshot me jo port dikh raha hai wo use karo
  secure: false,
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
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
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
