import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main id= "about" className="container mx-auto max-width pt-10 pb-20 bg-color: dark-mode ">
      <section>
        <h1 className="text-2xl text-green-text md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Sobre mim
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section >
        <h1  className="text-2xl text-green-text md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Experiência profissional
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-green-text md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Educação
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
