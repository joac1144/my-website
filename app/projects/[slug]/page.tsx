import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { fetchProjectDetails } from "@/app/lib/data";
import Gallery from "@/app/ui/gallery/gallery";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const projectDetailsResponse = await fetchProjectDetails(slug);

    if (!projectDetailsResponse.data.project) {
        return {
            title: "Project Not Found",
            description: "The project you are looking for does not exist.",
        };
    }

    const project = projectDetailsResponse.data.project;

    return {
        title: `Project - ${project.title}`,
        description: `Details about the project '${project.title}'`,
    };
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;
    const projectDetailsResponse = await fetchProjectDetails(slug);

    if (!projectDetailsResponse.data.project) {
        notFound();
    }

    const project = projectDetailsResponse.data.project;

    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

                    {project.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {
                                project.tags.map((tag) => (
                                    <div
                                        key={tag.name}
                                        className="flex items-center gap-2 px-3 py-1 border-2 border-purple-800/75 rounded-full bg-white/5 text-gray-200 text-sm font-medium"
                                    >
                                        {
                                            tag.logo && (
                                                <Image
                                                    src={tag.logo.url}
                                                    alt={tag.name}
                                                    width={20}
                                                    height={20}
                                                />
                                            )
                                        }
                                        <span>{tag.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>

                <div className="sm:max-w-3/4 md:max-w-1/2">
                    <Image
                        src={project.thumbnail.url}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>

            <div className="mb-12 max-w-none text-gray-200 space-y-3 leading-relaxed">
                <ReactMarkdown
                    components={{
                        a: ({ href, children }) => (
                            <a 
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-500 underline underline-offset-4 transition-colors duration-200"
                            >
                                {children}
                            </a>
                        ),
                    }}
                >
                    {project.content}
                </ReactMarkdown>
            </div>

            {
                project.gallery?.length > 0 && (
                    <Gallery images={project.gallery} />
                )
            }
        </main>
    );
}