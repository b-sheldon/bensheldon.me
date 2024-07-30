/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

function NavBar(props) {
  const handleClickAbout = () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickHome = () => {
    const welcome = document.getElementById('welcome');
    if (welcome) {
      welcome.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-row justify-end w-screen gap-4 px-4 py-2 text-xl shadow bg-blue text-blue-light">
      <button type="button" className="p-2 rounded-lg hover:bg-blue-dark" onClick={handleClickHome}>Home</button>
      <button type="button" className="p-2 rounded-lg hover:bg-blue-dark" onClick={handleClickAbout}>About Me</button>
      <button type="button" className="p-2 rounded-lg hover:bg-blue-dark" onClick={handleClickProjects}>Projects</button>
    </div>
  );
}

export default NavBar;
