import type { Metadata } from "next";
import { Allison, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";


const allison = Allison({
  variable: "--font-allison",
  weight: "400", // Allison only has 400
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // you can add more weights if needed
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Charles Igwe | Speaker | Mentor | Coach",
  description: "Inspiring Growth. Empowering Leaders. Driving Transformation.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${allison.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
