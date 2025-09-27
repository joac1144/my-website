import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { fetchProjectDetails } from "@/app/lib/data";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    const projectDetailsResponse = await fetchProjectDetails(slug);
    const project = projectDetailsResponse.data.project;

    return {
        title: `Project - ${project.title}`,
        description: `Details about the project ${project.title}`,
    };
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;
    const projectDetailsResponse = await fetchProjectDetails(slug);
    const project = projectDetailsResponse.data.project;

    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

                    {project.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag) => (
                                <div
                                    key={tag.name}
                                    className="flex items-center gap-2 px-3 py-1 border-2 border-purple-800 rounded-full shadow-sm bg-gray-50"
                                >
                                    {tag.logo && (
                                        <Image
                                            src={tag.logo.url}
                                            alt={tag.name}
                                            width={20}
                                            height={20}
                                        />
                                    )}
                                    <span className="text-sm font-medium text-black">{tag.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex-shrink-0">
                    <Image
                        src={project.thumbnail.url}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="max-w-2xs rounded-lg object-cover shadow-md"
                    />
                </div>
            </div>

            <div className="prose mb-12 max-w-none *:text-gray-300">
                <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>

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