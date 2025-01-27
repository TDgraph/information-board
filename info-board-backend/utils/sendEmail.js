const nodemailer = require("nodemailer");
require("dotenv").config();

/**
 * Sends an email using Nodemailer.
 * @param {string} to - Recipient's email address.
 * @param {string} subject - Email subject.
 * @param {string} text - Email body content.
 */
const sendEmail = async (to, subject, text) => {
  try {
    // Create a transporter object using SMTP settings (Gmail example)
    let transporter = nodemailer.createTransport({
      service: "gmail",  // Or use your own SMTP service
      auth: {
        user: process.env.EMAIL,  // Sender's email
        pass: process.env.EMAIL_PASSWORD,  // Sender's email password or App Password
      },
    });

    // Set up email options
    let mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      text: text,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${to}`);
  } catch (err) {
    console.error("Failed to send email:", err.message);
    throw new Error("Email sending failed");
  }
};

module.exports = sendEmail;


// const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
// require("dotenv").config();

// // Initialize AWS SES client
// const sesClient = new SESClient({
//   region: "us-east-1", // Your AWS SES region
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Add these keys in .env
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });

// /**
//  * Sends an email using AWS SES.
//  * @param {string} to - Recipient's email address.
//  * @param {string} subject - Email subject.
//  * @param {string} text - Email body content.
//  */
// const sendEmail = async (to, subject, text) => {
//   const params = {
//     Destination: {
//       ToAddresses: [to],
//     },
//     Message: {
//       Body: {
//         Text: { Data: text },
//       },
//       Subject: { Data: subject },
//     },
//     Source: process.env.EMAIL, // Verified sender email
//   };

//   try {
//     const command = new SendEmailCommand(params);
//     const result = await sesClient.send(command);
//     console.log(`Email sent successfully to ${to}:`, result);
//   } catch (err) {
//     console.error(`Failed to send email to ${to}:`, err.message);
//     throw new Error("Email sending failed");
//   }
// };

// module.exports = sendEmail;
