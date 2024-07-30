/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import Skill from './skill';

function About(props) {
  const skills = ['React', 'TailwindCSS', 'JavaScript', 'Java', 'Python', 'C++', 'C#', 'MongoDB', 'Node.js', 'Unity', 'Git', 'HTML', 'CSS', 'Firebase'];
  const [activeSkill, setActiveSkill] = useState('_____');
  // my-[calc(60px+10vw)] <-- goes on the div that wraps the text
  return (
    <div id="about" className="h-screen">
      <div className="flex flex-row h-full gap-12 jusify-around mx-[10vw]">
        {/* Images go here */}
        <div className="h-full bg-blue grow basis-1">
          <div className="flex flex-col gap-4">
            This is where an image is going to go.
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
            <div className="flex flex-row flex-wrap gap-4 text-6xl">
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
