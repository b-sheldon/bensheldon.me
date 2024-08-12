/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react';
import useStore from '../store';

function NavBar(props) {
  const [scrolling, setScrolling] = useState(false);
  const { activePage, setActivePage } = useStore();

  const handleClickAbout = () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
      setActivePage('about');
      setScrolling(true);
    }
  };
  const handleClickHome = () => {
    const welcome = document.getElementById('welcome');
    if (welcome) {
      welcome.scrollIntoView({ behavior: 'smooth' });
      setActivePage('welcome');
      setScrolling(true);
    }
  };
  const handleClickProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
      setActivePage('projects');
      setScrolling(true);
    }
  };

  const handleScroll = (event) => {
    if (scrolling) return;
    setScrolling(true);
    const welcome = document.getElementById('welcome');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');

    if (event.deltaY > 0) {
      if (activePage === 'welcome' && about) {
        about.scrollIntoView({ behavior: 'smooth' });
        setActivePage('about');
      } else if (activePage === 'about' && projects) {
        projects.scrollIntoView({ behavior: 'smooth' });
        setActivePage('projects');
      }
    } else if (activePage === 'projects' && about) {
      about.scrollIntoView({ behavior: 'smooth' });
      setActivePage('about');
    } else if (activePage === 'about' && welcome) {
      welcome.scrollIntoView({ behavior: 'smooth' });
      setActivePage('welcome');
    }
  };

  useEffect(() => {
    document.addEventListener('mousewheel', handleScroll, true);
    return () => {
      document.removeEventListener('mousewheel', handleScroll, true);
    };
  }, [activePage, scrolling]);

  useEffect(() => {
    if (scrolling) {
      setTimeout(() => {
        setScrolling(false);
      }, 1500);
    }
  }, [scrolling]);

  useEffect(() => {
    if (activePage === 'welcome') {
      const welcome = document.getElementById('welcome');
      if (welcome && ((document.documentElement.scrollTop || document.body.scrollTop) !== welcome.offsetTop)) {
        welcome.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (activePage === 'about') {
      const about = document.getElementById('about');
      if (about && ((document.documentElement.scrollTop || document.body.scrollTop) !== about.offsetTop)) {
        about.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (activePage === 'projects') {
      const projects = document.getElementById('projects');
      if (projects && ((document.documentElement.scrollTop || document.body.scrollTop) !== projects.offsetTop)) {
        projects.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activePage]);

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-row justify-end w-screen gap-4 px-4 py-2 text-xl shadow bg-blue text-blue-light">
      <button type="button" className="p-2 rounded-lg hover:bg-blue-dark" onClick={handleClickHome}>Home</button>
      <button type="button" className="p-2 rounded-lg hover:bg-blue-dark" onClick={handleClickAbout}>About Me</button>
      <button type="button" className="p-2 rounded-lg hover:bg-blue-dark" onClick={handleClickProjects}>Projects</button>
    </div>
  );
}

export default NavBar;
