import { cache } from "react";
import { ProjectsMetadataResponse, ProjectDetailsResponse } from "./models";

export async function fetchProjects(): Promise<ProjectsMetadataResponse> {
    const res = await fetch(`${process.env.BACKEND_API_URL}/projects`);
    return await res.json();
}

export const fetchProjectDetails: (slug: string) => Promise<ProjectDetailsResponse> = cache(async (slug: string) => {
    const res = await fetch(`${process.env.BACKEND_API_URL}/projects/${slug}`);
    return await res.json();
});