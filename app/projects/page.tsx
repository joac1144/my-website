import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { fetchProjects } from "@/app/lib/data";

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of projects showcasing my work as a full-stack developer."
};

export default async function Page() {
    const projects = await fetchProjects();

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-3">Projects</h1>
                <p className="text-gray-400 text-lg">
                    A selection of projects I have worked on
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-gray-200"
                    >
                        {project.thumbnail?.url && (
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.thumbnail.url}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform"
                                />
                            </div>
                        )}

                        <div className="p-4">
                            <h2 className="text-xl text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-gray-700 line-clamp-3 mb-4">
                                {project.summary}
                            </p>

                            {project.technologies?.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="text-xs px-2 py-1 bg-gray-100 rounded-full border text-gray-700"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}