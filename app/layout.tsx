import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';

const robotoSans = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "RepairCafé Schoten",
    description: "Komen gratis je defecte spullen herstellen in Haarlem Schoten",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
        >
        <header className="grid sm:grid-cols-[1fr_2fr_1fr] p-8">
            <Image className="col-start-2" sizes="33vw" alt="logo" src="/logo.png" width={3612} height={448} />
        </header>
        <main className="font-sans grid items-center justify-items-center min-h-screen p-8 gap-16 sm:px-20">
            {children}
        </main>
        </body>
        </html>
    );
}
