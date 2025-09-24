import { cache } from "react";
import { ProjectDetails, ProjectMetadata } from "./models";

export async function fetchProjects(): Promise<ProjectMetadata[]> {
    const res = await fetch(`${process.env.BACKEND_API_URL}/projects`);
    return await res.json();
}

export const fetchProjectDetails: (slug: string) => Promise<ProjectDetails> = cache(async (slug: string) => {
    const res = await fetch(`${process.env.BACKEND_API_URL}/projects/${slug}`);
    return await res.json();
});