import Link from "next/link";

export default function NotFound() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400">The project you are looking for does not exist.</p>
            <Link href="/projects" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Go to all Projects
            </Link>
        </main>
    );
}