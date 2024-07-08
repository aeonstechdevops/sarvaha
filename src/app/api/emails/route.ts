import { sendMail } from "@/app/lib/mail.utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  return new NextResponse("Don't panic!");
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { body } = await req.json();
  try {
    await sendMail(body);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error sending email");
  }
};
