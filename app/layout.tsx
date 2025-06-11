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

export const metadata = {
  title: 'Strategic Leadership Consulting | Business Transformation Expert',
  description: 'Transform complex challenges into breakthrough results through strategic thinking, proven methodologies, and deep industry expertise. Your next breakthrough starts here.',
  keywords: 'strategic leadership, business consulting, transformation, growth strategy',
  authors: [{ name: 'Strategic Leadership Consulting' }],
  openGraph: {
    title: 'Strategic Leadership Consulting',
    description: 'Bold thinking. Proven impact. Transform your business challenges into breakthrough results.',
    url: 'https://strategic-leadership-site.vercel.app',
    siteName: 'Strategic Leadership',
    type: 'website',
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
