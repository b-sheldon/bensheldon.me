/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react';
import Skill from './skill';
import Portrait1 from '../img/portrait_1.png';
import Portrait2 from '../img/portrait_2.png';

function About(props) {
  const skills = ['React', 'TailwindCSS', 'JavaScript', 'Java', 'Python', 'C++', 'C#', 'MongoDB', 'Node.js', 'Unity', 'Git', 'HTML', 'CSS', 'Firebase'];
  const [activeSkill, setActiveSkill] = useState('_____');
  const [portraitSize, setPortraitSize] = useState(Math.min(window.innerWidth * 0.3, window.innerHeight / 2 - 60));

  useEffect(() => {
    const handleResize = () => {
      setPortraitSize(Math.min(window.innerWidth * 0.3, window.innerHeight / 2 - 60));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div id="about" className="h-screen">
      <div className="flex flex-row h-full gap-12 jusify-center mx-[10vw] pt-[60px]">
        <div className="flex flex-col h-full w-[30vw] bg-blue items-center justify-around">
          <div style={{ width: portraitSize, height: portraitSize }}>
            <img src={Portrait1} alt="Portrait 1" className="object-cover rounded-full" />
          </div>
          <div style={{ width: portraitSize, height: portraitSize }}>
            <img src={Portrait2} alt="Portrait 2" className="object-cover rounded-full" />
          </div>
        </div>
        <div className="flex flex-col justify-center h-full gap-24 grow basis-1">
          <div className="text-2xl">
            {'Hi, I\'m Ben. I\'m a software developer with a passion for finding creative solutions to complex problems.'}
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="text-3xl text-blue">
              My Skills Include <span className="text-blue-light">{activeSkill}</span>.
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 text-6xl text-blue">
              {skills.map((skill) => (
                <Skill key={skill} skill={skill} setActiveSkill={setActiveSkill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
