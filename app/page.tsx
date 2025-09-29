import Link from "next/link";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <h1 className="text-4xl font-bold text-center">
                Joachim Alexander Kofoed
            </h1>
            <p className="text-center text-lg max-w-2xl">
                This website is under development.
                <br />
                Head over to
                <Link href="/projects" className="hover:underline px-1">
                    Projects
                </Link>
                to see some of my work as a full-stack developer.
            </p>
        </div>
    );
}
