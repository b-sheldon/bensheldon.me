import React from 'react';
import ReactFlipCard from 'reactjs-flip-card';

const Card = (props) => {
  /**
   * Project:
   *  {
   *    title: string,
   *    description: string,
   *    skills: string[],
   *    links: string[],
   *    images: string[],
   * }
   */
  const { project } = props;
  const { title, description, skills, links, images } = project;

  const renderCardFront = (
    <div className="flex flex-col items-center w-full h-full rounded text-blue-lighter bg-blue-light">
      <div className="p-2 grow basis-1 bg-blue-light">
        <img src={images[0]} alt={title} />
      </div>
      <div className="p-2 grow basis-1 bg-blue">
        {description}
      </div>
    </div>
  );

  const renderCardBack = (
    <div className="flex flex-col items-center w-full h-full rounded text-blue-lighter">
      <div className="p-2 grow basis-1 bg-blue-light">
        <img src={images[0]} alt={title} />
      </div>
      <div className="p-2 grow basis-1 bg-blue">
        <div className="flex flex-col gap-2">
          <div>
            {skills}
          </div>
          <div>
            {links}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ReactFlipCard
      frontComponent={renderCardFront}
      backComponent={renderCardBack}
      flipTrigger="onClick"
      direction="horizontal"
    />
  );
};

export default Card;
