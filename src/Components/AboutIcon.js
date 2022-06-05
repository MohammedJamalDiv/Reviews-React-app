import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIcon() {
  return (
    <div className="about-link">
      <Link className="router" to="/about">
        <p className="About-text"></p>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIcon;
