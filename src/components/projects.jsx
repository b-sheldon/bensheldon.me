/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from 'react-icons/pi';

import Card from './card';

const Projects = (props) => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1',
      skills: ['skill1', 'skill2'],
      links: ['link1', 'link2'],
      images: ['img1', 'img2'],
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2',
      skills: ['skill1', 'skill2'],
      links: ['link1', 'link2'],
      images: ['img1', 'img2'],
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3',
      skills: ['skill1', 'skill2'],
      links: ['link1', 'link2'],
      images: ['img1', 'img2'],
    },
  ];

  const { carouselFragment, slideToNextItem, slideToPrevItem } = useSpringCarousel({
    withLoop: true,
    items: [
      {
        id: 'item-1',
        renderItem: (
          <Card project={projects[0]} className="w-48 h-64" />
        ),
      },
      {
        id: 'item-2',
        renderItem: (
          <Card project={projects[1]} className="w-48 h-64" />
        ),
      },
      {
        id: 'item-3',
        renderItem: (
          <Card project={projects[2]} className="w-48 h-64" />
        ),
      },
    ],
  });

  return (
    <div className="h-[calc(100vh-44px)] flex flex-col justify-center gap-16">
      <div className="h-64">
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
