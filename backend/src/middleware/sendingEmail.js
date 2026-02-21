import emailjs from "@emailjs/nodejs";
import { configDotenv } from "dotenv";
import { signUpEmail } from "../utils/emailTemplate.js";

configDotenv();

emailjs.init({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY, // Required for Node.js
});

export const sendMail = async (name, email, html) => {
  const templateParams = {
    name,
    html,
    email,
  };
  try {
    const result = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      templateParams,
    );
    console.log("Email sent successfully:", result.status, result.text);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
