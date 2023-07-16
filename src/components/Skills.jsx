export const Skills = () => {
  const slides = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  ];
  return (
    <section
      id="skills"
      className={`mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row widescreen:section-min-height tallscreen:section-min-height`}
    >
      <article className="">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl mb-8">
          {/* My Skills */}
        </h2>
        <div className="flex mt-4 gap-4 bg-white p-4 rounded-xl max-w-100">
          {slides.map((skill) => {
            return (
              <div>
                <img src={skill} alt="" className="w-24" />
              </div>
            );
          })}
        </div>
        {/* <p className="mt-4 max-w-md text-center text-2xl text-black sm:text-left mx-auto">
          I will keep this continually updated
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          Stay tuned...
        </p> */}
      </article>
      <section></section>
    </section>
  );
};
