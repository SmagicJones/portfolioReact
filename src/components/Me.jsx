import me from "../assets/me.jpg";
import github from "../assets/github.svg";

export const Me = () => {
  return (
    <section
      id="me"
      className={`mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row widescreen:section-min-height tallscreen:section-min-height`}
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          Hi I'm Bob, {" "} <br />
          <span className="text-indigo-700 dark:text-indigo-300"> junior software developer 
          </span> Ready for a new challenge
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          This site is where I will showcase my projects and
          skills...
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          <div className="flex gap-8">
          <a href="https://github.com/SmagicJones" target="_blank">
            <img src={github} alt="" className="h-12 mt-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-holland-codes/"
            target="_blank"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"
              alt=""
              className="h-20 m-0"
            />
          </a>
        </div>
        </p>
      </article>
      <img src={me} alt="A picture of me complete with Northcoders hoodie" className="max-w-xs border rounded-full"/>
    </section>
  );
};
