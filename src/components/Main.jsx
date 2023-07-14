import { Me } from "./Me";
import { Projects } from "./Projects";
import {Skills} from './Skills'
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <main className=" bg-lime-700">
      <Me />
      <hr className="mx-auto bg-black dark:bg-white" />
      <Projects/>
      <hr className="mx-auto bg-black dark:bg-white" />
      <Skills/>
      <hr className="mx-auto bg-black dark:bg-white" />
      <Contact/>
      <hr className="mx-auto bg-black dark:bg-white" />
      <Footer/>


    </main>
  );
};
