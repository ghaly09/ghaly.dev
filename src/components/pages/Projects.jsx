import { Card } from "../templates/Card";
import { projectsAttribute } from "../Data/Projects.data";
import { Footer } from "../templates/Footer";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="px-5 lg:px-0 pt-20 md:pt-32">
          <motion.h2
            className="font-ghaly text-3xl lg:text-5xl font-bold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Projects
          </motion.h2>
          <motion.h2
            className="font-ghaly text-base lg:text-md pb-3 text-[#d3d4d6]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Showcase of my works on frontend development and Design.
          </motion.h2>
        </div>
        <motion.ul
          className="flex flex-col-reverse md:flex-row flex-wrap justify-between items-start px-5 lg:px-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projectsAttribute.toReversed().map((project) => {
            return (
              <motion.li key={project} variants={item}>
                <Card
                  key={project.id}
                  title={project.title}
                  imgSrc={project.imgSrc}
                  description={project.description}
                  propjectTeam={project.propjectTeam}
                  date={project.date}
                  readMoreLink={project.readMoreLink}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </section>
      <Footer />
    </>
  );
};
