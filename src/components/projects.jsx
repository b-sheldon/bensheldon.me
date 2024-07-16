/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from 'react-icons/pi';
import Card from './card';

const Projects = (props) => {
  const projects = [
    {
      id: 'project0',
      title: 'Project 1',
      description: 'This is a description of project 1',
      skills: ['skill1', 'skill2'],
      links: ['link1', 'link2'],
      images: ['img1', 'img2'],
    },
    {
      id: 'project1',
      title: 'Project 2',
      description: 'This is a description of project 2',
      skills: ['skill1', 'skill2'],
      links: ['link1', 'link2'],
      images: ['img1', 'img2'],
    },
    {
      id: 'project2',
      title: 'Project 3',
      description: 'This is a description of project 3',
      skills: ['skill1', 'skill2'],
      links: ['link1', 'link2'],
      images: ['img1', 'img2'],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(projects[0].id);

  const { carouselFragment, slideToNextItem, slideToPrevItem, useListenToCustomEvent } = useSpringCarousel({
    withLoop: true,
    itemsPerSlide: 3,
    initialStartingPosition: 'center',
    gutter: 32,
    items: projects.map((project) => {
      return {
        ...project,
        renderItem: (
          <div
            className={`relative flex flex-col items-center justify-center w-full transition-all duration-500 ${currentSlide === project.id ? 'scale-125' : 'scale-100 opacity-50'}`}
          >
            <Card project={project} />
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

  return (
    <div className="h-[calc(100vh-44px)] flex flex-col justify-center gap-16">
      <div className="flex flex-row items-center justify-center w-screen h-3/4 overflow-clip rounded-xl">
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
  );
};

export default Projects;
