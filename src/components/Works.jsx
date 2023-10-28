import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-[500px] h-full"
      >
        <div 
          className="relative w-full h-[280px] cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-5/6 h-5/6 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[20px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[15px]">{description}</p>
        </div>

        <div
          className="mt-4 flex flex-wrap gap-2"
        >
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`} >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The projects below highlight my skills and experience gained during web development bootcamp. Each project is briefly introduced, and you can find links to their code repositories. These projects demonstrate my proficiency in tackling intricate challenges, working with diverse technologies, and effectively managing projects.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-24">
        {projects.map ((project, i) => (
          <ProjectCard 
            key={`project-${i}`}
            index={i}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");