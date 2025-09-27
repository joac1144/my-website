import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/ui/nav-bar";
import { sourceSerif4 } from "@/app/ui/fonts";

export const metadata: Metadata = {
    title: "Joac's Portfolio",
    description: "Personal website created to demonstrate my ability to develop a full-stack web application along with CI/CD and hosting."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sourceSerif4.className} antialiased bg-[#121212]` /* bg-linear-to-t from-purple-900 to-black */ }> 
                <NavBar />
                <main className="min-h-screen">
                    {children}
                </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center shadow shadow-purple-500">
                    Some footer
                </footer>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
