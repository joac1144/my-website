export default function Loading() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="flex-1">
                    <div className="h-10 w-2/3 bg-gray-700 rounded mb-4"></div>

                    <div className="flex flex-wrap gap-3">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="h-7 w-20 bg-gray-700 rounded-full"
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <div className="h-48 w-72 bg-gray-700 rounded-lg"></div>
                </div>
            </div>

            <div className="space-y-4 mb-12">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-5 w-full bg-gray-700 rounded"></div>
                ))}
            </div>

            <section>
                <div className="h-8 w-44 bg-gray-700 rounded mb-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="h-40 w-full bg-gray-700 rounded-lg"></div>
                    ))}
                </div>
            </section>
        </main>
    );
}