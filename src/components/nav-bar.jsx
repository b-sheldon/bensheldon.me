/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

function NavBar(props) {
  return (
    <div className="flex flex-row gap-8 text-xl justify-end mx-4 gap-2">
      <button type="button" className="text-blue-light p-2 rounded-lg hover:bg-blue-medium">Home</button>
      <button type="button" className="text-blue-light p-2 rounded-lg hover:bg-blue-medium">About Me</button>
      <button type="button" className="text-blue-light p-2 rounded-lg hover:bg-blue-medium">Projects</button>
    </div>
  );
}

export default NavBar;
