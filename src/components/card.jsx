import React, { useEffect, useState } from 'react';
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
  const { project, currentSlide, setCurrentSlide, setSlideNext, setSlidePrev } = props;
  const { title, description, skills, links, images } = project;
  const [isFlipped, setIsFlipped] = useState(false);
  const styles = {
    card: { width: '100%', height: '100%', borderRadius: '10px' },
    container: { width: '100%', height: '100%' } };

  useEffect(() => {
    if (currentSlide !== project.id) {
      setIsFlipped(false);
    }
  }, [currentSlide, project.id]);

  const handleClick = (e) => {
    if (currentSlide === project.id) {
      setIsFlipped(!isFlipped);
    } else {
      if (e.clientX > window.innerWidth / 2) {
        setSlideNext(true);
      } else {
        setSlidePrev(true);
      }
      setCurrentSlide(project.id);
    }
  };

  const renderCardFront = (
    <div className="flex flex-col items-center w-full h-full rounded-xl text-blue-lighter bg-blue-light">
      <div className="p-2 grow basis-1 bg-blue-light">
        <img src={images[0]} alt={title} />
      </div>
      <div className="w-full h-full p-2 grow basis-1 bg-blue rounded-b-xl">
        {description}
      </div>
    </div>
  );

  const renderCardBack = (
    <div className="flex flex-col items-center w-full h-full rounded-xl text-blue-lighter bg-blue-light">
      <div className="p-2 grow basis-1 bg-blue-light">
        <img src={images[0]} alt={title} />
      </div>
      <div className="w-full h-full p-2 grow basis-1 bg-blue rounded-b-xl">
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
        flipTrigger="disabled"
        flipByProp={isFlipped}
        direction="horizontal"
        onClick={handleClick}
      />
    </div>
  );
};

export default Card;
