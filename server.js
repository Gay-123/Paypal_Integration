const express = require("express");
const app = express();
const { resolve } = require("path");
const port = process.env.PORT || 3000;

// Importing the dotenv module to use environment variables
require("dotenv").config();

// Import PayPal SDK
const paypal = require('@paypal/checkout-server-sdk');

// Set up the static folder
app.use(express.static(resolve(__dirname, process.env.STATIC_DIR)));

app.use('/assets', express.static('assets'));
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static pages
app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/success", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/success.html");
  res.sendFile(path);
});

app.get("/cancel", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/cancel.html");
  res.sendFile(path);
});

// Set up PayPal environment
const environment = new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_SECRET);
const client = new paypal.core.PayPalHttpClient(environment);

// Create order route
app.post("/create-order", async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [{
      amount: {
        currency_code: "USD",
        value: "49.99" // Example value, adjust as needed
      }
    }]
  });

  try {
    const order = await client.execute(request);
    res.json({
      id: order.result.id
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating order");
  }
});

// Capture order route
app.post("/capture-order", async (req, res) => {
  const { orderID } = req.body;
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});
  
  try {
    const capture = await client.execute(request);
    res.json({
      status: capture.result.status
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error capturing payment");
  }
});

// Server listening
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`You may access your app at: ${process.env.DOMAIN}`);
});
