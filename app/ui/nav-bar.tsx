"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { sourceSerif4 } from "@/app/ui/fonts";

const links = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
];

if (process.env.NODE_ENV === "development") {
    links.push({ name: "Nexj.js Training", href: "/nextjs-training" });
}

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="w-full bg-black/75 sticky top-0 z-50 shadow shadow-purple-500">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center h-16 items-center">
                    <div className="flex w-full max-w-2xl">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                scroll={false}
                                className={clsx(
                                    `relative ${sourceSerif4.className} text-md font-medium flex-1 text-center py-3 rounded transition-colors duration-200`,
                                    pathname === link.href
                                        ? "text-white"
                                        : "text-gray-200 hover:text-white hover:bg-[#4B0082]/40"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:w-10 md:w-20 h-0.5 bg-purple-900 rounded"></span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}