// Initialize PayPal Buttons
paypal.Buttons({
  createOrder: function(data, actions) {
    // Call the server to create an order
    return fetch("/create-order", {
      method: "POST",
    })
    
      .then((res) => res.json())
      .then((orderData) => {
        return orderData.id; // Return order ID
      });
  },

  onApprove: function(data, actions) {
    // Call the server to capture the payment
    return fetch("/capture-order", {
      method: "POST",
      body: JSON.stringify({
        orderID: data.orderID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((details) => {
        alert("Payment Successful");
        window.location.href = "/success"; // Redirect to success page
      })
      .catch((err) => {
        console.error(err);
        alert("Payment failed");
      });
  },

  onCancel: function(data) {
    // Redirect to cancel page
    window.location.href = "/cancel";
  },
}).render("#paypal-button-container"); // Render PayPal button here

return fetch("/create-order", { method: "POST" })
  .then((res) => res.json())
  .then((orderData) => {
    // Ensure you’re getting a valid response from the server
    console.log("Order created: ", orderData);
    return orderData.id;
  });
