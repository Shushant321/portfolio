require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://portfolio-shushi.netlify.app"
  ]
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));

// Mailtrap config (timeout ignore karo)
const contactEmail = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ VERIFY SKIP KARO - sirf logs me note karo
console.log("SMTP setup complete (verify skipped to avoid timeout)");

app.post("/contact", (req, res) => {
  console.log("📩 Contact form received:", req.body);
  
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`.trim();

  const mail = {
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,  // Mailtrap inbox
    subject: "Portfolio Contact Form",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("❌ SendMail Error:", error.message);
      return res.status(500).json({ success: false, message: "Email send failed" });
    }
    console.log("✅ Email sent successfully:", info.messageId);
    res.json({ success: true, message: "Message sent successfully!" });
  });
});
