export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    github: string;
    link: string | null;
    techs: string[];
}

export const PROJECTS: ProjectsType = [
    {
        id: 1,
        title: "Kanban Project",
        description: "A Kanban project board for managing tasks and workflows.",
        image: "/kanban.webp",
        github: "https://github.com/steven-dev1/Projects-Management-Web-App",
        link: "https://projects-m-app.vercel.app/",
        techs: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"]
    },
    {
        id: 2,
        title: "Football Score App",
        description: "A football score app that displays the current score of a football match.",
        image: "/football.webp",
        github: "https://github.com/steven-dev1/football-training-project",
        link: null,
        techs: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"]
    }
]

export type ProjectsType = Project[]; 