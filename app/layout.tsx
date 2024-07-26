import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Anek_Telugu } from "next/font/google";

const AnekTelugu = Anek_Telugu({ 
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Baptiste Andres",
  description: "Portfolio de Baptiste Andres, Ingénieur Logiciel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={cn(
        GeistSans.variable, 
        GeistMono.variable,
        AnekTelugu.variable, 
        "font-sans h-full bg-background text-foreground"
      )}>{children}</body>
    </html>
  );
}
