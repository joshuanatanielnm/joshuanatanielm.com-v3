import { getSortedExperience } from "@/server/keystatic";
import { formatDateRange } from "@/utils/date";
import { format } from "date-fns";
import React from "react";
import { ExperienceList } from "./list";
import Link from "next/link";
import { customMetadata } from "@/site.config";
import { Link2Icon } from "@radix-ui/react-icons";

export async function ExperienceSection() {
  const experiences = await getSortedExperience();
  return (
    <section className="flex flex-col gap-10 pt-12" id="experiences">
      <h3 className="text-xl font-bold lg:hidden">Experiences</h3>
      {experiences.map((experience) => {
        const {
          companyName,
          companyLogo,
          jobTitle,
          startDate,
          endDate,
          redirect,
          shortDescription,
        } = experience.entry;
        const formattedDate = formatDateRange({
          startDate: startDate,
          endDate: endDate,
        });
        return (
          <ExperienceList
            at={companyName}
            companyUrl={redirect.value?.url ?? ""}
            description={shortDescription}
            formattedDate={formattedDate}
            title={jobTitle}
            key={`${jobTitle}-${format(new Date(startDate), "yyyy-MM-dd")}`}
            imageUrl={companyLogo}
          />
        );
      })}
      <Link
        href={customMetadata.resumeUrl}
        className="flex my-auto pt-4 gap-1 text-orange-600 hover:underline"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Link2Icon className="my-auto" />
        View Full Resume
      </Link>
    </section>
  );
}