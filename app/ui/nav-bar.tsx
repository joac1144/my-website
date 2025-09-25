"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { sourceSerif4 } from "@/app/ui/fonts";

const links = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Projects",
        href: "/projects"
    },
    {
        name: "Contact",
        href: "/contact"
    },
    {
        name: "Nexj.js Training",
        href: "/nextjs-training"
    }
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center h-16 items-center">
                    <div className="flex w-full max-w-2xl">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    `relative ${sourceSerif4.className} text-md font-medium flex-1 text-center py-3 rounded transition-colors duration-200`,
                                    pathname === link.href
                                        ? "text-gray-900 dark:text-white"
                                        : "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gray-900 dark:bg-white rounded"></span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}