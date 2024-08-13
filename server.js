import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'erhamashamsi@gmail.com',  
        pass: 'qkas ugzp xcim mcnx'
    }
});

app.get('/', (req, res) => {
    console.log('Received GET request');
    res.send('Hello World!');
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
            res.status(200).send('Emailsent');
        }
    });
});



app.post('/send-order-email', (req, res) => {
    const {
        companyName,
        email,
        hardwareUpgrades,
        cloudManagement,
        website,
        inspection
    } = req.body;

    const mailOptions = {
        from: 'erhamashamsi@gmail.com',
        to: 'Arhamh@hamait.net',  
        subject: 'New Order Submission',
        text: `
            Company Name: ${companyName}
            Email: ${email}
            Hardware Upgrades: ${hardwareUpgrades.join(', ')}
            Cloud Management: ${cloudManagement.join(', ')}
            Website: ${website}
            Inspection: ${inspection ? 'Yes' : 'No'}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Order email sent: ' + info.response);
            res.status(200).send('Order email sent successfully');
        }
    });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
