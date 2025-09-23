import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-full flex justify-center gap-8 p-3 bg-gray-200 dark:bg-gray-800">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/nextjs-training">Nexj.js Training</Link>
        </nav>
    );
}