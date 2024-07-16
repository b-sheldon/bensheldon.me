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
  const styles = {
    card: { width: '100%', height: '100%', borderRadius: '10px' },
    container: { width: '100%', height: '100%' } };

  const renderCardFront = (
    <div className="flex flex-col items-center w-full h-full rounded text-blue-lighter bg-blue-light">
      <div className="p-2 grow basis-1 bg-blue-light">
        <img src={images[0]} alt={title} />
      </div>
      <div className="w-full h-full p-2 grow basis-1 bg-blue">
        {description}
      </div>
    </div>
  );

  const renderCardBack = (
    <div className="flex flex-col items-center w-full h-full rounded text-blue-lighter bg-blue-light">
      <div className="p-2 grow basis-1 bg-blue-light">
        <img src={images[0]} alt={title} />
      </div>
      <div className="w-full h-full p-2 grow basis-1 bg-blue">
        <div className="flex flex-col gap-2">
          <div>
            Skills: {skills}
          </div>
          <div>
            Links: {links}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        containerStyle={styles.container}
        frontComponent={renderCardFront}
        backComponent={renderCardBack}
        flipTrigger="onClick"
        direction="horizontal"
      />
    </div>
  );
};

export default Card;
