import me from "../assets/bob-logo.svg";

export const Me = () => {
  return (
    <section
      id="me"
      className={`mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row widescreen:section-min-height tallscreen:section-min-height`}
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          Hi I'm Bob, {" "}
          <span className="text-indigo-700 dark:text-indigo-300"> junior software developer 
          </span> Ready for a new challenge
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          This site is where I will showcase my projects and
          skills...
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          Bob Holland
        </p>
      </article>
      <img src={me} alt="A picture of me complete with Northcoders hoodie" className="max-w-xs"/>
    </section>
  );
};
