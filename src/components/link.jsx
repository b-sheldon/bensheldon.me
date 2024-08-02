import React from 'react';

const Link = (props) => {
  const { link, text } = props;
  return (
    <a href={link}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-lg hover:bg-blue-dark"
    >
      {text}
    </a>
  );
};

export default Link;
