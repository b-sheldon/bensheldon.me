import React from 'react';
import { FaReact, FaJava, FaPython, FaNodeJs, FaUnity, FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import { RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import { SiCplusplus, SiCsharp, SiMongodb, SiFirebase } from 'react-icons/si';
import { GoGitBranch } from 'react-icons/go';

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
  };
  const { skill, setActiveSkill } = props;

  return (
    <div className="transition-all text-blue hover:text-blue-light hover:scale-110" onMouseEnter={() => setActiveSkill(skill)}>
      {skills[skill]}
    </div>
  );
};

export default Skill;
