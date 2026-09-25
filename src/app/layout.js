import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog — Workout Library",
  description:
    "Browse gym workouts, build today's plan, and track weekly calories with FitLog.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        <PlanProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />

          <Toaster />
        </PlanProvider>
      </body>
    </html>
  );
}
