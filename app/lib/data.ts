import { cache } from "react";
import { ProjectsMetadataResponse, ProjectDetailsResponse } from "./models";

export async function fetchProjects(): Promise<ProjectsMetadataResponse> {
    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/projects`);

        if (!res.ok) {
            throw new Error("Failed to fetch projects: " + res.statusText);
        }

        return await res.json();
    }
    catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}

export const fetchProjectDetails: (slug: string) => Promise<ProjectDetailsResponse> = cache(async (slug: string) => {
    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/projects/${slug}`);
    
        if (!res.ok) {
            console.log(`Failed to fetch project details for slug '${slug}': `, res.statusText);
            throw new Error(`Failed to fetch project details for slug '${slug}': ` + res.statusText);
        }
    
        return await res.json();
    }
    catch (error) {
        console.error(`Error fetching project details for slug '${slug}':`, error);
        throw error;
    }
});