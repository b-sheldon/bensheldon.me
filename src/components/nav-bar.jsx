/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

function NavBar(props) {
  return (
    <div className="flex flex-row justify-end gap-2 gap-8 mx-4 text-xl">
      <button type="button" className="p-2 rounded-lg text-blue-light hover:bg-blue">Home</button>
      <button type="button" className="p-2 rounded-lg text-blue-light hover:bg-blue">About Me</button>
      <button type="button" className="p-2 rounded-lg text-blue-light hover:bg-blue">Projects</button>
    </div>
  );
}

export default NavBar;
