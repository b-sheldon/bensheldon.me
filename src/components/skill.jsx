import React from 'react';
import { FaReact, FaJava, FaPython, FaNodeJs, FaUnity, FaHtml5, FaCss3Alt, FaMeta, FaSpotify } from 'react-icons/fa6';
import { RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import { SiCplusplus, SiCsharp, SiMongodb, SiFirebase, SiOpenai, SiOpengl } from 'react-icons/si';
import { GoGitBranch } from 'react-icons/go';
import { IoLogoElectron } from 'react-icons/io5';

const Skill = (props) => {
  const skills = {
    React: <FaReact />,
    TailwindCSS: <RiTailwindCssFill />,
    JavaScript: <RiJavascriptFill />,
    Java: <FaJava />,
    Python: <FaPython />,
    'C++': <SiCplusplus />,
    'C#': <SiCsharp />,
    MongoDB: <SiMongodb />,
    'Node.js': <FaNodeJs />,
    Unity: <FaUnity />,
    Git: <GoGitBranch />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Firebase: <SiFirebase />,
    Meta: <FaMeta />,
    Spotify: <FaSpotify />,
    'OpenAI API': <SiOpenai />,
    Electron: <IoLogoElectron />,
    OpenGL: <SiOpengl />,
  };
  const { skill, setActiveSkill } = props;

  const handleMouseEnter = () => {
    if (setActiveSkill) setActiveSkill(skill);
  };

  return (
    <div className="transition-all hover:text-blue-light hover:scale-110" onMouseEnter={handleMouseEnter}>
      {skills[skill]}
    </div>
  );
};

export default Skill;
