import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';

const Link = (props) => {
  const { href, icon } = props;
  const links = {
    GitHub: <FaGithub />,
    Website: <CiGlobe />,
  };
  return (
    <a href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-dark"
      onClick={(e) => e.stopPropagation()}
    >
      {links[icon]}
    </a>
  );
};

export default Link;
