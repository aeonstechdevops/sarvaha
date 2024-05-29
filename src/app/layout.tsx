import type { Metadata } from "next";
import { Libre_Bodoni, Poppins } from "next/font/google";
import "./globals.scss";
import Header from "./_components/header";
import Footer from "./_components/footer";

const libre_bodoni = Libre_Bodoni({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-bodoni",
});
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SARVAH",
  description: "Incubation Center of SGGS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libre_bodoni.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
