import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    java,
    spring,
    csharp,
    net,
    postgressql,
    oracle,
    vscode,
    git,
    github,
    postman,
  } = techStackDetails;
  return (
    <main id="technologies" className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-green-text md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Tecnologias que estou trabalhando atualmente:
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={spring} title="Spring Boot" alt="" />
        <img src={csharp} title="C# (Csharp)" alt="" />
        <img src={net} title=".Net" alt="" />

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-green-text md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Ferramentas
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={postgressql} title="PostgreSQL " alt="" />
        <img src={oracle} title="Oracle Database" alt="" />
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
