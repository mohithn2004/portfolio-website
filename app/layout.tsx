"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import favicon from './favicon.ico'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Mohith - Portfolio</title>
        <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

