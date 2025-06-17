import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar"
// import PrelineScriptWrapper from './components/PrelineScriptWrapper';
import PrelineInitializer from './components/PrelineInitializer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mangap",
  description: "Manga Upadtes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <PrelineInitializer />
        {children}
      </body>
    </html>
  );
}
