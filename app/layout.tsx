import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/ui/nav-bar";

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
            <body>
                <div>
                    <NavBar />
                </div>
                <main className="min-h-screen">
                    {children}
                </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                    Some footer
                </footer>
            </body>
        </html>
    );
}
