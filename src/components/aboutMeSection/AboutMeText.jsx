import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      <p className="text-xl font-bold text-blue-600">Hi, I’m Aishwarya Pol,</p>
      <p className="text-lg mt-2">
        A passionate <strong>Full Stack Java Developer</strong> with experience in
        building scalable and efficient web applications. I have a strong foundation in{" "}
        <strong>Java, Hibernate, Servlets,</strong> and <strong>MySQL</strong>, along with front-end
        expertise in <strong>HTML, CSS, JavaScript,</strong> and <strong>Bootstrap</strong>.
      </p>

      <p className="text-lg mt-4">
        I also have hands-on experience with <strong>React (beginner level), PHP (beginner level),</strong> and
        <strong>Python (beginner level)</strong>, allowing me to explore and adapt to various technologies.
        My proficiency in <strong>C</strong> and <strong>C++</strong> strengthens my problem-solving and logic-building abilities.
      </p>

      <p className="text-lg mt-4">
        With a keen interest in continuous learning and innovation, I strive to develop robust applications
        that deliver a seamless user experience.
      </p>

      <p className="text-xl font-semibold text-gray-700 mt-6">Technical Skills:</p>
      <ul className="list-disc pl-6 mt-2 text-lg">
        <li>
          <strong>Languages:</strong> Java, C, C++, JavaScript, Python (beginner)
        </li>
        <li>
          <strong>Front-End:</strong> HTML, CSS, Bootstrap, React (beginner)
        </li>
        <li>
          <strong>Back-End:</strong> Java (Servlets, Hibernate), PHP (beginner)
        </li>
        <li>
          <strong>Databases:</strong> MySQL
        </li>
        <li>
          <strong>Development Tools:</strong> Eclipse, VS Code
        </li>
      </ul>
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
