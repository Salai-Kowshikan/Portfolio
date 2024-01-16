import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: './local.env' });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/contact', async (req, res) => {
  const { email, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'New message from contact form',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({success: true});
  } catch (error) {
    console.error(error);
    res.status(200).json({success: false});
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
  console.log(`Email: {${process.env.EMAIL} and Password: ${process.env.PASSWORD}}`)
});