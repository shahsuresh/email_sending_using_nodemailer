import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // Use `true` for port 465, `false` for all other ports
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
let emailSender = async () => {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "shahsuresh75@gmail.com", // sender address
      to: "shahsuresh75@zohomail.com,shahlov4u@gmail.com,anjusah45@gmail.com", // list of receivers
      subject: "Testing from NODEJS APP", // Subject line
      text: "Hello world? From NODEMAILER", // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.log("SOMETHING IS WRONG");
    console.log(error.message);
  }
};
// emailSender();
export default emailSender;
