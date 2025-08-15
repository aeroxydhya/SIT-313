require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const path = require('path');

const app = express();
const PORT = 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY
    
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const msg = {
        to: "cvdfdf98@gmail.com",
        from: 'a21429969@gmail.com',
        subject: 'Welcome to DEV@Deakin!',
        text: 'Thanks for subscribing to DEV@Deakin! Stay tuned for updates.',
        html: '<strong>Thanks for subscribing to DEV@Deakin! Stay tuned for updates.</strong>',
    };

    try {
        await sgMail.send(msg);
        res.json({ message: 'Subscription successful! Welcome email sent.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
