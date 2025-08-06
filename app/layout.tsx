import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { HeadingLogo } from '@/components/HeadingLogo';

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
    description: "Gratis samen je defecte spullen repareren in Haarlem Schoten",
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
            <HeadingLogo className="col-start-2" imageProps={{sizes: '33vw'}} />
        </header>
        <main className="font-sans grid items-center justify-items-center min-h-screen p-8 gap-16 sm:px-20">
            {children}
        </main>
        </body>
        </html>
    );
}
