/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import adventure from '../img/adventure.png';
import climb from '../img/climb.png';
import ski from '../img/ski.png';

function Welcome(props) {
  const [text, setText] = useState('____');

  const handleHoverEnter = (event, action) => {
    setText(action);
  };

  return (
    <div className="flex flex-col gap-12 text-4xl h-[calc(100vh-44px)] justify-center">
      <div className="text-center">Ben Sheldon</div>
      <div className="flex flex-row justify-center gap-8 text-blue-light transition-all">
        <i className="fa-brands fa-github hover:scale-110" />
        <i className="fa-brands fa-linkedin hover:scale-110" />
        <i className="fa-brands fa-instagram hover:scale-110" />
      </div>
      <div className="pl-20 text-start text-3xl text-blue-light">{`I love to ${text}`}</div>
      <div className="flex flex-row justify-center gap-8 flex-wrap items-start">
        <div className="w-1/5 aspect-square overflow-hidden rounded-full hover:shadow-glow hover:scale-150 hover:translate-y-10 transition-all ease-in-out">
          <img
            src={ski}
            alt="ski"
            onMouseEnter={(e) => handleHoverEnter(e, 'ski!')}
            onMouseLeave={(e) => handleHoverEnter(e, '____')}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/5 aspect-square overflow-hidden rounded-full hover:shadow-glow hover:scale-150 hover:translate-y-10 transition-all ease-in-out">
          <img
            src={climb}
            alt="climb"
            onMouseEnter={(e) => handleHoverEnter(e, 'climb!')}
            onMouseLeave={(e) => handleHoverEnter(e, '____')}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/5 aspect-square overflow-hidden rounded-full hover:shadow-glow hover:scale-150 hover:translate-y-10 transition-all ease-in-out">
          <img
            src={adventure}
            alt="adventure"
            onMouseEnter={(e) => handleHoverEnter(e, 'adventure!')}
            onMouseLeave={(e) => handleHoverEnter(e, '____')}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
