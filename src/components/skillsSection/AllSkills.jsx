import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaBootstrap, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleSkill from "./SingleSkill"; 

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Java",
    icon: FaJava, 
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap, 
  },
  {
    skill: "PHP",
    icon: FaPhp,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
