import { Metadata } from "next";
import { fetchProjects } from "@/app/lib/data";
import ProjectCard from "@/app/ui/project-card";

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of projects showcasing my work as a full-stack developer."
};

export default async function Page() {
    const projectsMetadataResponse = await fetchProjects();

    if (projectsMetadataResponse === null) {
        return (
            <main className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">Error Loading Projects</h1>
                <p className="text-gray-400">There was an error fetching the projects. Please try again later.</p>
            </main>
        );
    }
    
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