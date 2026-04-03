export interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  date: string;
  company: string;
}

export const EXPERIENCE: ExperienceType = [
  {
    id: 1,
    title: "Desarrollador Front-End",
    description:
      "Desarrollo de un LMS con interfaces modernas y responsivas usando React, Next.js, Tailwind y TypeScript, integradas con servicios en Node.js y Express.",
    date: "Abril 2023 - Julio 2024",
    company: "Globant",
  },
  {
    id: 2,
    title: "Desarrollador Full-Stack",
    description:
      "Creación de una app de estadísticas de fútbol con Next.js y TypeScript, utilizando Supabase para backend, autenticación y base de datos en tiempo real.",
    date: "Julio 2024 - Enero 2025",
    company: "Globant",
  },
  {
    id: 3,
    title: "Desarrollador Full-Stack",
    description:
      "Desarrollo de una plataforma de gestión residencial con React y Next.js, respaldada por un backend en Node.js y Express.",
    date: "Abril 2025 - Junio 2025",
    company: "Independiente",
  },
];

export type ExperienceType = ExperienceCard[];
