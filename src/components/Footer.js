import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div class='footer'>
        <div class='row'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#project'>Projects</a>
            </li>
          </ul>
        </div>

        <div class='row'>
          <ul>
            <li>
              <a>Copyright © 2023 All rights reserved. Calvin Zhong</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
