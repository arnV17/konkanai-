import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ CORS Middleware: allow your frontend hosted on Vercel
app.use(cors({
  origin: 'https://konkanai-ccyn.vercel.app', // Frontend domain
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

// ✅ Handle preflight OPTIONS requests
app.options('*', cors());

app.use(express.json());

// ✅ Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Debug logs (optional)
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***MASKED***' : 'NOT SET');
console.log('NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL);

// ✅ Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message, timestamp, type } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New ${type} from Konkanai Website`,
      html: `
        <h2>New ${type} Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
        <hr>
        <p>This is an automated notification from your Konkanai website contact form.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
