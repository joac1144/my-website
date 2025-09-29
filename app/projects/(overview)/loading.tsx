export default function Loading() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="h-8 w-48 bg-gray-800/40 rounded mx-auto mb-3 animate-pulse" />
                <div className="h-5 w-72 bg-gray-800/30 rounded mx-auto animate-pulse" />
            </div>

            {/* Grid of project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="group block rounded-2xl overflow-hidden shadow-md shadow-purple-800 bg-[#121212]"
                    >
                        <div className="relative h-48 w-full bg-gray-800/40 animate-pulse" />

                        <div className="p-4">
                            <div className="h-6 w-3/4 bg-gray-800/40 rounded mb-3 animate-pulse" />
                            <div className="h-4 w-full bg-gray-800/30 rounded mb-2 animate-pulse" />
                            <div className="h-4 w-5/6 bg-gray-800/30 rounded mb-4 animate-pulse" />

                            <div className="flex flex-wrap gap-2">
                                <div className="h-5 w-12 bg-gray-800/30 rounded-full animate-pulse" />
                                <div className="h-5 w-16 bg-gray-800/30 rounded-full animate-pulse" />
                                <div className="h-5 w-10 bg-gray-800/30 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}