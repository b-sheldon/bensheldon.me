/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

function About(props) {
  return (
    <div id="about" className="h-screen">
      <div className="relative flex flex-row gap-12">
        <div className="text-3xl w-[20vw] absolute rotate-90 top-64 left-0">
          ABOUT ME
        </div>
        <div className="flex flex-col mt-[calc(60px+10vw)] h-full justify-around ml-[30vw]">
          <div>
            This is where some about me text is going to go and it will be very interesting and informative.
          </div>
          <div>
            This is where my skills will be listed and they will be very impressive.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
