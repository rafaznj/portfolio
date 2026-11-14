import { LuDatabase, LuMonitor, LuServer, LuWrench } from "react-icons/lu";

import react from "../../assets/images/stacks/react.svg";
import javascript from "../../assets/images/stacks/javascript.svg";
import typescript from "../../assets/images/stacks/typescript.svg";
import tailwindcss from "../../assets/images/stacks/tailwindcss.svg";
import styledComponents from "../../assets/images/stacks/styled-components.svg";
import tanstack from "../../assets/images/stacks/tanstack.svg";

import nestjs from "../../assets/images/stacks/nestjs.svg";
import nodejs from "../../assets/images/stacks/nodejs.svg";
import express from "../../assets/images/stacks/express.svg";
import jest from "../../assets/images/stacks/jest.svg";
import aws from "../../assets/images/stacks/aws.svg";

import postgresql from "../../assets/images/stacks/postgresql.svg";
import mysql from "../../assets/images/stacks/mysql.svg";
import sqlserver from "../../assets/images/stacks/sql-server.svg";
import drizzleOrm from "../../assets/images/stacks/drizzle-orm.svg";

import git from "../../assets/images/stacks/git.svg";
import github from "../../assets/images/stacks/github.svg";
import docker from "../../assets/images/stacks/docker.svg";
import azure from "../../assets/images/stacks/azure.svg";
import sonarqube from "../../assets/images/stacks/sonarqube.svg";
import figma from "../../assets/images/stacks/figma.svg";

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
      {
        name: "Express.js",
        image: express,
        invertOnDark: true,
      },
      { name: "NestJS", image: nestjs },
      { name: "Jest", image: jest },
      { name: "AWS", image: aws },
    ],
  },
  {
    id: "database",
    icon: LuDatabase,
    skills: [
      { name: "PostgreSQL", image: postgresql },
      { name: "MySQL", image: mysql },
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
      { name: "Azure", image: azure },
      { name: "SonarQube", image: sonarqube },
      { name: "Figma", image: figma },
    ],
  },
] as const;
