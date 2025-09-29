"use client";

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-4">Error Loading Project</h1>
            <p className="text-gray-400">There was an error loading the project. Please try again later.</p>
            <pre className="mt-4 p-4 bg-red-100 text-red-800 rounded">
                {error.message}
            </pre>
            <button
                onClick={() => reset()}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Retry
            </button>
        </main>
    );
}