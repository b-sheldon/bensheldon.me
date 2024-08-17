import React, { useEffect, useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import Link from './link';
import Skill from './skill';

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
  const { title, date, description, technologies, skills, links, sources } = project;
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
      <div className="flex flex-col justify-center p-2 grow basis-1 bg-blue-light rounded-t-xl">
        { sources[0].type === 'img'
          ? <img src={sources[0].src} alt={title} />
          : <video src={sources[0].src} autoPlay loop muted /> }
      </div>
      <div className="flex flex-col w-full h-full gap-2 p-4 grow basis-1 bg-blue rounded-b-xl">
        <div className="flex flex-row justify-between font-bold md:text-xl lg:text-2xl text-blue-light">
          <div>{title} | {date}</div>
          <div className="flex flex-row gap-2 text-2xl lg:text-3xl">
            {links.map((link) => (
              <Link key={link.icon + title} href={link.href} icon={link.icon} />
            ))}
          </div>
        </div>
        <div className="overflow-y-auto justify-self-center">
          {description}
        </div>
      </div>
    </div>
  );

  const renderCardBack = (
    <div className="flex flex-col items-center w-full h-full rounded-xl text-blue-lighter bg-blue-light">
      <div className="flex flex-col justify-center p-2 grow basis-1 bg-blue-light rounded-t-xl">
        { sources[1].type === 'img'
          ? <img src={sources[1].src} alt={title} />
          : <video src={sources[1].src} autoPlay loop muted /> }
      </div>
      <div className="flex flex-col justify-start w-full h-full gap-2 p-4 grow basis-1 bg-blue rounded-b-xl">
        <div className="flex flex-row justify-between font-bold md:text-xl lg:text-2xl text-blue-light">
          <div>Technologies</div>
          <div className="flex flex-row gap-1 text-2xl lg:text-3xl">
            {skills.map((skill) => (
              <Skill key={skill + title} skill={skill} />
            ))}
          </div>
        </div>
        <div className="overflow-y-auto justify-self-center">
          {technologies}
        </div>
      </div>
    </div>
  );

  return (
    <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
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
