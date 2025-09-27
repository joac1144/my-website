export type ProjectsMetadataResponse = {
    data: {
        allProjects: ProjectMetadata[];
    }
}

export type ProjectDetailsResponse = {
    data: {
        project: ProjectDetails;
    }
}

export type ProjectMetadata = {
    title: string;
    slug: string;
    summary: string;
    thumbnail: {
        url: string;
    },
    tags: {
        name: string;
        logo: {
            url: string;
        }
    }[];
    pinned: boolean;
};

export type ProjectDetails = {
    title: string;
    slug: string;
    thumbnail: {
        url: string;
    },
    tags: {
        name: string;
        logo: {
            url: string;
        }
    }[];
    content: string;
    gallery: {
        url: string;
    }[];
}