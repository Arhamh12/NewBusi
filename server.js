import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();
app.use(cors());
app.use(json());

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'erhamashamsi@gmail.com',
        pass: 'your_password'  // Remember to keep your password secure
    }
});

app.post('/send-email', (req, res) => {
    const { email, lastName, message } = req.body;
    const mailOptions = {
        from: 'erhamashamsi@gmail.com',
        to: email,
        subject: 'Contact Form Submission',
        text: `Message from ${lastName}: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
