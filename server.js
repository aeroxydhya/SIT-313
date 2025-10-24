require('dotenv').config();  // Load .env variables
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const path = require('path');

const app = express();
const PORT = 3000;

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const msg = {
    to: email,
    from: 'a325456343@gmail.com', // verified sender
    subject: 'Welcome to DEV@Deakin!',
    text: 'Thanks for subscribing to DEV@Deakin! Stay tuned for updates.',
    html: '<strong>Thanks for subscribing to DEV@Deakin! Stay tuned for updates.</strong>',
  };

  try {
    const response = await sgMail.send(msg);
    console.log(`Email successfully sent to ${email}`);
    console.log('SendGrid response status code:', response[0].statusCode);
    res.json({ message: 'Subscription successful! Welcome email sent.' });
  } catch (error) {
    console.error('Error sending email:');
    if (error.response) {
      console.error('Status code:', error.response.statusCode);
      console.error('Body:', error.response.body);
    } else {
      console.error(error);
    }
    res.status(500).json({ error: 'Failed to send email. Check server console for details.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
