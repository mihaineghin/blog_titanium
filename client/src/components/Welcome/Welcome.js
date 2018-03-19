import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () =>
  (
    <div className="welcome abs-center-align">
      <h1 className="big-text">Welcome!!!</h1>
      {localStorage.getItem('id_token')

        ?
        <Link to="/posts" className="start-btn">Start</Link>
        :
        <Link to="/login" className="start-btn">Start</Link>

      }

    </div>
  );

export default Welcome;
