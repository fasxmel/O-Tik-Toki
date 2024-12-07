import type { Metadata } from "next";
import "./globals.css";
import AuthOverlay from "@/app/components/AuthOverlay";



export const metadata: Metadata = {
  title: "O Tik-Toki",
  description: "Tik Tok Clone",
  icons: '/images/logo1.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <AuthOverlay />
      <body>
        {children}
      </body>
    </html>
  );
}
