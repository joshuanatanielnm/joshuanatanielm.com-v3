import React from "react";
import Sidebar from "./sections/sidebar";
import { ExperienceSection } from "@/components/sections/experiences";
import { ProjectSection } from "@/components/sections/projects";
import { AboutSection } from "@/components/sections/about";

export default async function Page() {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col gap-6 lg:gap-32 lg:w-7/12 text-zinc-800 pb-20 justify-end">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </div>
    </div>
  );
}
