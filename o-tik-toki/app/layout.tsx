import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "O Tik-Toki",
  description: "Tik Tok Clone",
  icons: '/images/logo3.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
