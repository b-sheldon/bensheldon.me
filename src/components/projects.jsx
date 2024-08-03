/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from 'react-icons/pi';
import Card from './card';
import KeyShot1 from '../img/projects/ignight/KeyShot1.png';
import KeyShot2 from '../img/projects/ignight/KeyShot2.png';
import HarmonizeFeed from '../img/projects/harmonize/harmonize-feed.png';
import HarmonizePreview from '../img/projects/harmonize/harmonize-preview.mp4';

const Projects = (props) => {
  const projects = [
    {
      id: 'project0',
      title: 'Harmonize',
      date: 'May 2024',
      description: 'Welcome to Harmonize, the ultimate social experience for music lovers! Sign in with your Spotify account and dive into a vibrant community of music enthusiasts. Follow your friends to discover the songs they’re loving, or share your own favorite tracks with personalized posts. Connect, share, and celebrate music together with Harmonize!',
      technologies: 'This is a description of the technologies used',
      skills: ['React', 'JS', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Spotify API'],
      links: [{ href: 'https://github.com/dartmouth-cs52-24s/project-client-spotify-sharing/', icon: 'GitHub' }, { href: 'https://harmonize-client.onrender.com/', icon: 'Website' }],
      sources: [{ type: 'img', src: HarmonizeFeed }, { type: 'video', src: HarmonizePreview }],
    },
    {
      id: 'project1',
      title: 'What the Yap?',
      date: 'April 2024',
      description: 'This is a description of project 2',
      technologies: 'This is a description of the technologies used',
      skills: ['skill1', 'skill2'],
      links: [{ href: 'https://github.com/b-sheldon/whattheyap', icon: 'GitHub' }, { href: 'src', icon: 'Website' }],
      sources: [{ type: 'img', src: 'img1' }, { type: 'video', src: 'img2' }],
    },
    {
      id: 'project2',
      title: 'Ignight',
      date: 'January - March 2024',
      description: 'This is a description of project 3',
      technologies: 'This is a description of the technologies used',
      skills: ['skill1', 'skill2'],
      links: [{ href: 'https://github.com/b-sheldon/ignight', icon: 'GitHub' }, { href: 'src', icon: 'Website' }],
      sources: [{ type: 'img', src: KeyShot1 }, { type: 'img', src: KeyShot2 }],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(projects[0].id);
  const [slideNext, setSlideNext] = useState(false);
  const [slidePrev, setSlidePrev] = useState(false);

  const { carouselFragment, slideToNextItem, slideToPrevItem, useListenToCustomEvent } = useSpringCarousel({
    disableGestures: true,
    gutter: 128,
    itemsPerSlide: 1,
    initialStartingPosition: 'center',
    withLoop: true,
    items: projects.map((project) => {
      return {
        ...project,
        renderItem: (
          <div
            className={`relative flex flex-col items-center justify-center w-full transition-all duration-500 cursor-pointer ${currentSlide === project.id ? 'scale-110' : 'scale-100 opacity-50'}`}
          >
            <Card project={project} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} setSlideNext={setSlideNext} setSlidePrev={setSlidePrev} />
          </div>
        ),
      };
    }),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === 'onSlideStartChange') {
      setCurrentSlide(event?.nextItem?.id);
    }
  });

  useEffect(() => {
    if (slideNext) {
      slideToNextItem();
      setSlideNext(false);
    } else if (slidePrev) {
      slideToPrevItem();
      setSlidePrev(false);
    }
  }, [slideNext, slidePrev]);

  return (
    <div id="projects" className="h-screen">
      <div className="flex flex-col justify-center h-full gap-16 pt-[84px]">
        <div className="flex flex-row items-center justify-center w-1/2 max-w-[700px] mx-auto h-2/3 rounded-xl">
          {carouselFragment}
        </div>
        <div className="flex flex-row self-center gap-4 text-6xl">
          <button type="button" onClick={slideToPrevItem} className="hover:text-blue">
            <PiArrowCircleLeftThin />
          </button>
          <button type="button" onClick={slideToNextItem} className="hover:text-blue">
            <PiArrowCircleRightThin />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Projects;
