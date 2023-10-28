import nodemailer from 'nodemailer';

export default async (req, res) => {
  console.log(req.body)
  if (req.method === "POST") {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "theaibarista@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "theaibarista@gmail.com",
      subject: `New Message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
};