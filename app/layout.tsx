import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "Mini E-commerce",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


import { Inter, Lobster } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400", // REQUIRED for Lobster
  variable: "--font-lobster",
});
 