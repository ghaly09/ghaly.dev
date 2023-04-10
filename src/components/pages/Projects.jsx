import { Card } from "../templates/Card";
import { projectsAttribute } from "../Data/Projects.data";
import { Footer } from "../templates/Footer";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="px-5 lg:px-0 pt-20 md:pt-32">
          <h2 className="font-ghaly text-3xl lg:text-5xl font-bold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]">
            Projects
          </h2>
          <h2 className="font-ghaly text-base lg:text-md pb-3 text-[#d3d4d6] ">
            Showcase of my works on frontend development and Design.
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row flex-wrap justify-between items-start px-5 lg:px-0 ">
          {projectsAttribute.map((project) => {
            return (
              <Card
                title={project.title}
                imgSrc={project.imgSrc}
                description={project.description}
                propjectTeam={project.propjectTeam}
                date={project.date}
                readMoreLink={project.readMoreLink}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
