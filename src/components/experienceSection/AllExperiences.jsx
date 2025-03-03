import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Java Developer",
    company: "Unique System Skill",
    date: "2025",
    responsibilities: [
      "Developed Web Applications using Java, Servlets, and Hibernate for efficient backend processing.",
      "Implemented RESTful APIs to enable seamless communication between front-end and back-end systems.",
      
    ],
  },
  {
    job: "Backend Developer",
    company: "College",
    date: "2025 - Present",
    responsibilities: [
      "Designed and Developed the Backend Architecture using PHP & MySQL, ensuring scalability and efficiency..",
      "Implemented Secure User Authentication with role-based access control for students, faculty, and admins.",
      
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
