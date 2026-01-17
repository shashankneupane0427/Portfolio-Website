import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashank Neupane",
  description: "Computer Science student at Tribhuvan University, passionate about Web Development and AI/ML.",
  authors: [{ name: "Surya Shashank Neupane", url: "https://www.suryashashank.com.np" }],
  openGraph: {
    title: "Surya Shashank Neupane - Full Stack Developer",
    description: "Portfolio of Surya Shashank Neupane, Computer Science student passionate about Web Development and AI/ML.",
    url: "https://www.suryashashank.com.np",
    siteName: "Surya Shashank Portfolio",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
