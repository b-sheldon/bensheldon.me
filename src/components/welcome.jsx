/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import adventure from '../img/adventure.png';
import climb from '../img/climb.png';
import ski from '../img/ski.png';
import eat from '../img/eat.png';

function Welcome(props) {
  // const [text, setText] = useState('____');

  const handleHoverEnter = (event, action) => {
    // setText(action);
  };

  return (
    <div id="welcome" className="flex flex-col justify-center h-screen gap-16 px-10 text-4xl">
      <div className="text-6xl text-center font-marcellus">Ben Sheldon</div>
      <div className="flex flex-row justify-center gap-8 text-blue-light">
        <a href="https://github.com/b-sheldon"><i className="transition-all fa-brands fa-github hover:scale-125 github-logo hover:text-transparent" /></a>
        <a href="https://www.linkedin.com/in/ben-sheldon/"><i className="transition-all fa-brands fa-linkedin hover:scale-125 linkedin-logo hover:text-transparent" /></a>
        <a href="https://www.instagram.com/ben.sheldon/"><i className="transition-all fa-brands fa-instagram hover:scale-125 instagram-logo hover:text-transparent" /></a>
      </div>
      {/* <div className="pl-10 text-3xl text-start text-blue-light">{`I love to ${text}`}</div> */}
      <div className="flex flex-row flex-wrap items-start justify-center gap-8">
        <div className="w-1/5 overflow-hidden transition-all ease-in-out rounded-full aspect-square hover:shadow-glow hover:scale-150 hover:translate-y-10">
          <img
            src={ski}
            alt="ski"
            onMouseEnter={(e) => handleHoverEnter(e, 'ski!')}
            onMouseLeave={(e) => handleHoverEnter(e, '____')}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/5 overflow-hidden transition-all ease-in-out rounded-full aspect-square hover:shadow-glow hover:scale-150 hover:translate-y-10">
          <img
            src={climb}
            alt="climb"
            onMouseEnter={(e) => handleHoverEnter(e, 'climb!')}
            onMouseLeave={(e) => handleHoverEnter(e, '____')}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/5 overflow-hidden transition-all ease-in-out rounded-full aspect-square hover:shadow-glow hover:scale-150 hover:translate-y-10">
          <img
            src={adventure}
            alt="adventure"
            onMouseEnter={(e) => handleHoverEnter(e, 'adventure!')}
            onMouseLeave={(e) => handleHoverEnter(e, '____')}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/5 overflow-hidden transition-all ease-in-out rounded-full aspect-square hover:shadow-glow hover:scale-150 hover:translate-y-10">
          <img
            src={eat}
            alt="eat"
            onMouseEnter={(e) => handleHoverEnter(e, 'eat!')}
            onMouseLeave={(e) => handleHoverEnter(e, '____')}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
