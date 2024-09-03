import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_SENDER,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
  },
});

export const sendMail = async (body: string) => {
  try {
    await transporter.sendMail({
      from: "sarvah@sggs.ac.in",
      to: ["dean.iil@sggs.ac.in", "sarvah@sggs.ac.in"],
      subject: "IMPORTANT | Contacted from Sarvah Website ",
      html: body,
    });
  } catch (error) {
    console.error(error);
  }
};
