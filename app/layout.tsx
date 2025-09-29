import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/ui/nav-bar";
import { sourceSerif4 } from "@/app/ui/fonts";

export const metadata: Metadata = {
    title: "Joachim's Portfolio",
    description: "Personal website created to show some of my work as a developer."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sourceSerif4.className} antialiased bg-[#121212]`}> 
                <NavBar />
                <main className="min-h-screen">
                    {children}
                </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center shadow shadow-purple-500">
                </footer>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
