import { Metadata } from "next";
import Image from "next/image";
import { fetchProjectDetails } from "@/app/lib/data";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    const projectDetails = await fetchProjectDetails(slug);

    return {
        title: `Project - ${projectDetails.title}`,
        description: `Details about the project ${projectDetails.title}`,
    };
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;
    const project = await fetchProjectDetails(slug);

    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-2 px-3 py-1 border rounded-full shadow-sm bg-gray-50"
                        >
                            {tech.logo && (
                                <Image
                                    src={tech.logo.url}
                                    alt={tech.name}
                                    width={20}
                                    height={20}
                                />
                            )}
                            <span className="text-sm font-medium text-black">{tech.name}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Rich Content (basic rendering) */}
            <section className="prose prose-lg max-w-none mb-12">
                {/* Placeholder since you’re getting DAST from DatoCMS */}
                <p>
                    <em>
                        Render rich text content here (e.g., paragraphs, headings, lists).
                    </em>
                </p>
            </section>

            {/* Gallery */}
            {project.gallery?.length > 0 && (
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.gallery.map((image, i) => (
                            <Image
                                key={i}
                                src={image.url}
                                alt={`Gallery image ${i + 1}`}
                                width={200}
                                height={0}
                                className="rounded-lg shadow-md object-cover"
                            />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}