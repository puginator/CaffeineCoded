import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  const bodyText = await req.text(); // Read body as text
  const body = JSON.parse(bodyText); // Parse text as JSON
  const {name, email, phone, project} = body; // Destructure JSON object
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
    text: `${project} \n\n ${name} \n\n ${phone} \n\n ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    // Return a response object instead of using res.status
    return {
      status: 200,
      body: "Email sent successfully",
    };
  } catch (error) {
    console.error(error);
    // Return a response object in case of error
    return {
      status: 500,
      body: "Error sending email",
    };
  }
};
