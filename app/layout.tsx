import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./ui/header/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ООО Рэйдекс",
  generator: "Next.js",
  applicationName: "raydex",
  referrer: "origin-when-cross-origin",
  keywords: ["Raydex", "Рэйдекс", 'ООО "Рэйдекс"'],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
