# 💳 PayPal Integration with Node.js

This project demonstrates a simple and clean integration of **PayPal Checkout** using **Node.js** as the backend and plain HTML/CSS for the frontend. The app handles payment flow from checkout to success/cancel.

---

## 🚀 Features

- ✅ Node.js backend with PayPal REST SDK  
- ✅ Simple frontend for checkout  
- ✅ Environment variable support  
- ✅ Ready for deployment on AWS EC2  

---

## 📦 Environment Variables

<pre lang="markdown"> ## Create a `.env` file with the following content: ``` PORT=3000 CLIENT_ID=your_paypal_client_id CLIENT_SECRET=your_paypal_client_secret ``` </pre>

---

## 🛠️ Run Locally

git clone https://github.com/Gay-123/Paypal_Integration.git 
cd Paypal_Integration
npm install node server.js

Then visit: `http://localhost:3000`

---

## ☁️ AWS EC2 Deployment

Launch Ubuntu EC2 instance

SSH into the instance: ssh -i your-key.pem ubuntu@<EC2-IP>

Install required packages: sudo apt update sudo apt install git nodejs npm

Clone your repo and run: git clone https://github.com/Gay-123/Paypal_Integration.git cd Paypal_Integration npm install node server.js

Make sure to open **port 3000** in your EC2 Security Group.

---

## 🧪 PayPal Setup

- Go to: https://developer.paypal.com/
- Create a sandbox app
- Use the generated **Client ID** and **Client Secret** in your `.env` file

---

## 📁 Project Structure

📦 Paypal_Integration
┣ 📂 css
┣ 📄 index.html
┣ 📄 cancel.html
┣ 📄 success.html
┣ 📄 server.js
┣ 📄 app.js
┣ 📄 .env
┗ 📄 package.json

---

## 🔚 Conclusion

This project provides a clean and simple integration of PayPal Checkout with a Node.js backend and a straightforward frontend. It is designed for easy deployment, whether locally or on AWS EC2, and is fully configurable using environment variables. This setup offers a solid foundation for any web application looking to implement PayPal payments.

Feel free to fork, modify, and contribute to this repository. If you have any questions or need further assistance, don't hesitate to open an issue or reach out!
