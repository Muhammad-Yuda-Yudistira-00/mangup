import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar"
// import PrelineScriptWrapper from './components/PrelineScriptWrapper';
import PrelineInitializer from './components/PrelineInitializer';
import {Suspense} from 'react'
import ReduxProvider from '@/lib/redux/ReduxProvider'

const yudiProfile = "https://my-profile-ten-kohl.vercel.app/"
const titikProfile = "https://github.com/titik444/"

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ReduxProvider>

          <Suspense fallback={<div>Loading...</div>} >
            <Navbar />
          </Suspense>

          <PrelineInitializer />

          {children}

          <footer className="h-24 w-full overflow-hidden dark:bg-green-800 flex items-center justify-center">
            <p className="text-lg text-green-600 font-extralight uppercase">Created by <a href={yudiProfile} target="_blank" className="underline font-medium hover:text-black">Yudistira</a> & <a href={titikProfile} target="_blank" className="underline font-medium hover:text-black">Titik</a></p>
          </footer>

        </ReduxProvider>   
      </body>
    </html>
  );
}
