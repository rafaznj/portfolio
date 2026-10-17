import { LuDatabase, LuMonitor, LuServer, LuWrench } from "react-icons/lu";

import react from "../../assets/images/stacks/react.svg";
import javascript from "../../assets/images/stacks/javascript.svg";
import typescript from "../../assets/images/stacks/typescript.svg";
import tailwindcss from "../../assets/images/stacks/tailwindcss.svg";
import styledComponents from "../../assets/images/stacks/styled-components.svg";
import tanstack from "../../assets/images/stacks/tanstack.svg";

import nestjs from "../../assets/images/stacks/nestjs.svg";
import nodejs from "../../assets/images/stacks/nodejs.svg";
import aws from "../../assets/images/stacks/aws.svg";

import postgresql from "../../assets/images/stacks/postgresql.svg";
import sqlserver from "../../assets/images/stacks/sql-server.svg";
import drizzleOrm from "../../assets/images/stacks/drizzle-orm.svg";

import git from "../../assets/images/stacks/git.svg";
import github from "../../assets/images/stacks/github.svg";
import docker from "../../assets/images/stacks/docker.svg";
import azure_devops from "../../assets/images/stacks/azure-devops.svg";

export const skillSections = [
  {
    id: "frontend",
    icon: LuMonitor,
    skills: [
      { name: "React", image: react },
      { name: "JavaScript", image: javascript },
      { name: "TypeScript", image: typescript },
      { name: "Tailwind CSS", image: tailwindcss },
      { name: "Styled Components", image: styledComponents },
      { name: "TanStack", image: tanstack },
    ],
  },
  {
    id: "backend",
    icon: LuServer,
    skills: [
      { name: "Node.js", image: nodejs },
      { name: "NestJS", image: nestjs },
      { name: "AWS", image: aws },
    ],
  },
  {
    id: "database",
    icon: LuDatabase,
    skills: [
      { name: "PostgreSQL", image: postgresql },
      { name: "SQL Server", image: sqlserver },
      { name: "Drizzle ORM", image: drizzleOrm },
    ],
  },
  {
    id: "tools",
    icon: LuWrench,
    skills: [
      { name: "Git", image: git },
      { name: "GitHub", image: github, invertOnDark: true },
      { name: "Docker", image: docker },
      { name: "Azure DevOps", image: azure_devops },
    ],
  },
] as const;
