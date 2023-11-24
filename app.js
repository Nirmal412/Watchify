// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Mock payment processing function (replace with a real payment gateway)
function processPayment(paymentData) {
  // Here, you can integrate with a payment gateway to process the payment.
  // For this example, we'll simply return a success message.
  return { success: true, message: 'Payment successful' };
}

// Endpoint for handling payment requests
app.post('/processPayment', (req, res) => {
  const paymentData = req.body;

  if (!paymentData || !paymentData.paymentMethod) {
    return res.status(400).json({ success: false, message: 'Invalid payment data' });
  }

  // Process the payment
  const paymentResult = processPayment(paymentData);

  if (paymentResult.success) {
    return res.status(200).json(paymentResult);
  } else {
    return res.status(500).json(paymentResult);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
