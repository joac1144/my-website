export type ProjectMetadata = {
    title: string;
    slug: string;
    summary: string;
    thumbnail: {
        url: string;
    },
    technologies: {
        name: string;
        logo: {
            url: string;
        }
    }[];
};

export type ProjectDetails = {
    title: string;
    slug: string;
    thumbnail: {
        url: string;
    },
    technologies: {
        name: string;
        logo: {
            url: string;
        }
    }[];
    content: unknown;
    gallery: {
        url: string;
    }[];
}