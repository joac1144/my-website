import { fetchProjects } from "@/app/lib/data";

export default async function Page() {
    const projects = await fetchProjects();

    return (
        <main>
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-6">Projects</h1>
                <ul className="space-y-4">
                    {projects.map((project) => (
                        <li key={project.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-semibold">{project.name}</h2>
                            <p className="text-gray-600">{project.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}