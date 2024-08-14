import express from "express";
import emailSender from "./email.js";
const app = express();
app.use(express.json());

//=========
app.get("/send-mail", async (req, res) => {
  await emailSender();
  return res.status(200).send({ message: "Email Sent Successfully" });
  //   window.alert("Email Sent Successfully");
});

app.listen(4000, () => {
  console.log("App is running at port 4000");
});
