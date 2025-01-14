/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from 'react-icons/pi';
import Card from './card';

const Projects = (props) => {
  const KeyShot1 = '/img/projects/ignight/KeyShot1.png';
  const KeyShot4 = '/img/projects/ignight/KeyShot4.png';
  const HarmonizeFeed = '/img/projects/harmonize/harmonize-feed.png';
  const HarmonizePreview = '/img/projects/harmonize/harmonize-preview.mp4';
  const WhatTheYapPreview = '/img/projects/what-the-yap/what-the-yap-preview.mp4';
  const WhatTheYapHome = '/img/projects/what-the-yap/what-the-yap-home.png';
  const LostInSpaceKeyShot = '/img/projects/lost-in-space/Ben_UnityProject_KeyShot2.png';
  const LostInSpacePreview = '/img/projects/lost-in-space/Ben_UnityProject_VideoClip.mp4';
  const WaterCaveScene1 = '/img/projects/water-cave-scene/FP_RedCrystal.png';
  const WaterCaveScene4 = '/img/projects/water-cave-scene/FP_Angle4.mp4';
  const ReplayPreview = '/img/projects/replay/replay-preview.mp4';
  const projects = [
    {
      id: 'project3',
      title: 'Replay',
      date: 'Summer 2024',
      description: 'Replay is an Electron web app that allows users to replay touches and gestures on Garmin flight deck displays by extracting data from the video stream. It overlays touch and gesture data over the video player, synchronized with the video, and contains an interactive event log to view detailed information about and quickly navigate to each event. It is designed to increase the efficiency of reproducing and diagnosing issues with the flight deck displays. The flight deck video and detailed event information are obscured for privacy reasons.',
      technologies: 'Replay was built in Electron, using React and Tailwind CSS for the frontend, and Node.js, C++, and Python for the backend. The backend parses extracts events from the video stream and sends them to the frontend, which overlays the touches in-sync with the video player. Additionally, it integrates with Garmin\'s API to enable auto-updating.',
      skills: ['Electron', 'React', 'Node.js', 'TailwindCSS', 'Python', 'C++'],
      links: [],
      sources: [{ type: 'video', src: ReplayPreview }, { type: 'video', src: ReplayPreview }],
    },
    // {
    //   id: 'project4',
    //   title: 'Tune Link',
    //   date: 'Summer 2024',
    //   description: 'Tune Link enables you to quickly discover new music by using AI to generate song recommendations based on the songs you like and dislike. Just swipe right on songs you love and left on songs you don\'t, and Tune Link will create a personalized recommendations of new songs you\'re sure to enjoy. It\'s the perfect way to discover new music and expand your horizons!',
    //   technologies: 'Tune Link uses React and Tailwind CSS for the frontend, with a Node.js backend and MongoDB database. It integrates with the Spotify API to access user data and music information, allowing users to play music. Additionally, it uses the OpenAI API to generate song recommendations based on user interaction.',
    //   skills: ['React', 'Node.js', 'TailwindCSS', 'MongoDB', 'Express', 'Spotify', 'OpenAI API'],
    //   links: [{ href: 'https://github.com/jcandrews2/tune-link', icon: 'GitHub' }, { href: '', icon: 'Website' }],
    //   sources: [{ type: 'img', src: '' }, { type: 'img', src: '' }],
    // },
    {
      id: 'project0',
      title: 'Harmonize',
      date: 'May 2024',
      description: 'Welcome to Harmonize, the ultimate social experience for music lovers! Sign in with your Spotify account and dive into a vibrant community of music enthusiasts. Follow your friends to discover the songs they\'re loving, or share your own favorite tracks with personalized posts. Connect, share, and celebrate music together with Harmonize!',
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
    {
      id: 'project5',
      title: 'Lost in Space',
      date: 'Winter 2024',
      description: 'Lost in Space is a puzzle game where the player finds themself alone in an empty, eerie spaceship. As they explore their environment, they find that they can interact with the pedestals to move their environment. However, they must also collect the orbs in order to progress. As they progress through, the puzzles get progressively harder, with the player having to use their creativity to solve them. ',
      technologies: 'Lost in Space was built using Unity and C#. It uses the Unity physics engine to allow the player to interact with the environment and move objects around. It also uses the Unity particle system to create a visually stunning environment. It also uses the Unity animation system to allow the camera to move around the environment, following the player.',
      skills: ['Unity', 'C#'],
      links: [{ href: 'https://github.com/b-sheldon/LostInSpace', icon: 'GitHub' }, { href: 'https://youtu.be/iWNw2rqqqQE', icon: 'Website' }],
      sources: [{ type: 'img', src: LostInSpaceKeyShot }, { type: 'video', src: LostInSpacePreview }],
    },
    {
      id: 'project6',
      title: 'Water Cave Scene',
      date: 'Winter 2023',
      description: 'This project is a 3D scene of a water cave created using C++, OpenGL, and GLSL. The scene contains a 3D modeled cave with glowing crystals, animated water, and a hole to view the starry skybox outside. The scene is rendered in real-time and the camera can be moved to explore different angles within the scene.',
      technologies: 'The most technically challenging aspects of creating this scene were the water animation, lighting calculations, and the skybox. The water animation was created using a Perlin noise function that changes over time. The lighting calculations were done using GLSL shaders to calculate the diffuse and specular lighting on the cave walls and crystals. The skybox was created using a cubemap texture to simulate the starry night.',
      skills: ['C++', 'OpenGL'],
      links: [{ href: 'https://github.com/b-sheldon/computer-graphics-projects', icon: 'GitHub' }],
      sources: [{ type: 'video', src: WaterCaveScene4 }, { type: 'img', src: WaterCaveScene1 }],
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
      <div className="flex flex-col justify-center h-full gap-24 pt-[84px]">
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
