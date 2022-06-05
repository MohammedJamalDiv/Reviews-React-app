import React from 'react';
import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function PageAbout() {
  const linkStyles = {
    textDecoration: 'none',

    color: 'red',
  };
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>this a react Application To leave feedBacks</p>
        <p>Version : 1.0.0</p>

        <p>
          <Link style={linkStyles} to="/">
            Back To HomePage
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default PageAbout;
