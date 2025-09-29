import Link from "next/link";
import Image from "next/image";
import { ProjectMetadata } from "@/app/lib/models";

export default function ProjectCard({ project, extraCss }: {
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