/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from 'react-icons/pi';
import Card from './card';
import KeyShot1 from '../img/projects/ignight/KeyShot1.png';
import KeyShot4 from '../img/projects/ignight/KeyShot4.png';
import HarmonizeFeed from '../img/projects/harmonize/harmonize-feed.png';
import HarmonizePreview from '../img/projects/harmonize/harmonize-preview.mp4';
import WhatTheYapPreview from '../img/projects/what-the-yap/what-the-yap-preview.mp4';
import WhatTheYapHome from '../img/projects/what-the-yap/what-the-yap-home.png';

const Projects = (props) => {
  const projects = [
    {
      id: 'project0',
      title: 'Harmonize',
      date: 'May 2024',
      description: 'Welcome to Harmonize, the ultimate social experience for music lovers! Sign in with your Spotify account and dive into a vibrant community of music enthusiasts. Follow your friends to discover the songs they’re loving, or share your own favorite tracks with personalized posts. Connect, share, and celebrate music together with Harmonize!',
      technologies: 'Harmonize uses React and Chakra UI for the frontend, with a Node.js backend and MongoDB database. It integrates with the Spotify API to access user data and music information, allowing users to play music and modify their playlists.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Spotify'],
      links: [{ href: 'https://github.com/dartmouth-cs52-24s/project-client-spotify-sharing/', icon: 'GitHub' }, { href: 'https://harmonize-client.onrender.com/', icon: 'Website' }],
      sources: [{ type: 'img', src: HarmonizeFeed }, { type: 'video', src: HarmonizePreview }],
    },
    {
      id: 'project1',
      title: 'What the Yap?',
      date: 'April 2024',
      description: 'What the Yap? lets you quickly generate study sets using AI-powered tools. It contains a voice powered tool that will read the flashcards/quiz questions to you, listen for your response (validating with AI), and provide feedback. It was designed with accessibility in mind, allowing users to engage with educational content purely through voice commands. It is a technology for any auditory learner, anyone with visual impairments, or anyone who wants to transform morning runs or commutes into a simultaneous opportunity for learning.',
      technologies: 'This app uses Node.js for the backend, with a Firebase system to track authentication and users\' study sets. It integrates with ChatGPT API to generate the flashcards, quizzes, and validate answers. It uses React and Tailwind for the frontend and Microsoft Azure Speech SDK to turn text-to-speech and speech-to-text.',
      skills: ['React', 'TailwindCSS', 'Node.js', 'Firebase', 'OpenAI API'],
      links: [{ href: 'https://github.com/b-sheldon/whattheyap', icon: 'GitHub' }, { href: 'https://devpost.com/software/yabber', icon: 'Website' }],
      sources: [{ type: 'img', src: WhatTheYapHome }, { type: 'video', src: WhatTheYapPreview }],
    },
    {
      id: 'project2',
      title: 'Ignight',
      date: 'Winter 2024',
      description: 'Ignight is an interactive VR experience where the user can learn about zodiac constellations in a visually stunning and emotionally soothing environment.',
      technologies: 'Ignight was built using Unity, C#, and the Meta Quest 3 SDK. It uses hand and gaze tracking to allow the user to interact with the environment and learn about the constellations without needing controllers.',
      skills: ['Unity', 'C#', 'Meta'],
      links: [{ href: 'https://github.com/b-sheldon/ignight', icon: 'GitHub' }, { href: 'https://youtu.be/JBvYWwU9k4k', icon: 'Website' }],
      sources: [{ type: 'img', src: KeyShot1 }, { type: 'img', src: KeyShot4 }],
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
