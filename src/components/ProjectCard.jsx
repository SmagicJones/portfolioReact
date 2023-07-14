import { Carousel } from "./Carousel";
import react from "../assets/react.svg"
import githubimg from "../assets/github.svg"

export const ProjectCard = ({ projectName, description, team, slides, github }) => {
  return (
    <>
      <li className="mx-auto flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 sm:w-5/6 max-w-sm max-h-md h- w-50">
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img src={s} alt="" />
          ))}
        </Carousel>
        <h3 className="text-center text-3xl text-slate-500">
          {projectName}
        </h3>
        <p className="mt-2 hidden text-center text-2xl text-slate-500 dark:text-slate-400 sm:block">
          {description}
        </p>
        <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
          {team}
        </p>
        <div className="flex gap-4 mt-4">
            <a href={github} target="_blank"><img src={githubimg} alt="" className="h-12" /></a>
        </div>
      </li>
    </>
  );
};
