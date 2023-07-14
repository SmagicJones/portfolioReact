import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { parkMeBikeSlides } from "../data/parkmebikeslides";
import { ncNewsSlides } from "../data/ncnewsslides";
import { newsBackEndSlides } from "../data/newsbackendslides";
import { rocketReactSlides } from "../data/rocketslides";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Projects
      </h2>
      <ul className="mx-auto my-12 flex list-none items-center gap-8 flex-col max-w-lg">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              slides={
                project.projectName === "ParkMeBike"
                  ? parkMeBikeSlides
                  : project.projectName === "NC News"
                  ? ncNewsSlides
                  : project.projectName === "Rocket React Project"
                  ? rocketReactSlides
                  : newsBackEndSlides
              }
              projectName={project.projectName}
              description={project.description}
              team={project.team}
              github={project.github}
            />
          );
        })}
      </ul>
    </section>
  );
};
