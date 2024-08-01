/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import Skill from './skill';
import Portrait1 from '../img/portrait_1.png';
import Portrait2 from '../img/portrait_2.png';

function About(props) {
  const skills = ['React', 'TailwindCSS', 'JavaScript', 'Java', 'Python', 'C++', 'C#', 'MongoDB', 'Node.js', 'Unity', 'Git', 'HTML', 'CSS', 'Firebase'];
  const [activeSkill, setActiveSkill] = useState('_____');
  // my-[calc(60px+10vw)] <-- goes on the div that wraps the text
  return (
    <div id="about" className="h-screen">
      <div className="flex flex-row h-full gap-12 jusify-around mx-[10vw] pt-[60px]">
        <div className="h-full grow basis-1 bg-blue">
          <div className="flex flex-col justify-around h-full gap-4 overflow-hidden">
            <div className="bg-blue-light max-h-1/2 grow basis-1 aspect-square">
              <img src={Portrait1} alt="Portrait 1" className="object-cover rounded-full" />
            </div>
            <div className="bg-blue-light max-h-1/2 grow basis-1 aspect-square">
              <img src={Portrait2} alt="Portrait 2" className="object-cover rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around h-full grow basis-1">
          <div className="text-2xl">
            {'Hi, I\'m Ben. I\'m a software developer with a passion for finding creative solutions to complex problems.'}
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="text-3xl text-blue">
              My Skills Include <span className="text-blue-light">{activeSkill}</span>.
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 text-6xl">
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
