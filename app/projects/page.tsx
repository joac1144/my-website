import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { fetchProjects } from "@/app/lib/data";
import { ProjectMetadata } from "../lib/models";

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of projects showcasing my work as a full-stack developer."
};

export default async function Page() {
    const projectsMetadataResponse = await fetchProjects();
    const projects = projectsMetadataResponse.data.allProjects;

    const pinnedProjects = projects.filter((p) => p.pinned);
    const otherProjects = projects.filter((p) => !p.pinned);

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-3">Projects</h1>
                <p className="text-gray-400 text-lg">
                    A selection of projects I have worked on
                </p>
            </div>

            {pinnedProjects.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pinnedProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} extraCss="border-2 border-purple-700/75" />
                        ))}
                    </div>
                </section>
            )}

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </section>
        </div>
    );
}

function ProjectCard({ project, extraCss }: {
    project: ProjectMetadata;
    extraCss?: string;
}) {
    return (
        <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`group block rounded-2xl overflow-hidden shadow-md shadow-purple-800 transition-shadow bg-[#121212] ${extraCss}`}
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
                <h2 className="text-xl text-white font-semibold mb-2 group-hover:text-purple-700/90 transition-colors">
                    {project.title}
                </h2>
                <p className="text-gray-300 line-clamp-3 mb-4">
                    {project.summary}
                </p>

                {project.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag.name}
                                className="text-xs px-2 py-1 rounded-full bg-white/5 border-2 border-purple-800/40 text-gray-200"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}