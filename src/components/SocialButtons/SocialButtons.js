import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './social-button.css';
import navIcon2 from '../../assets/img/github.svg';

export function SocialButtons() {
  return (
    <div className='social-button-bg'>
      <a
        href='https://github.com/calvinflzhong'
        target='_blank'
        rel='noreferrer'
      >
        <BsGithub className='social-button' id='github' />
      </a>
      <a
        href='https://www.linkedin.com/in/calvin-zhong/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin className='social-button' id='linkedin' />
      </a>
      {/* <div className='social-icon'>
        <a
          href='https://github.com/calvinflzhong'
          target='_blank'
          rel='noreferrer'
        >
          <img src={navIcon2} alt='Github' />
        </a>
      </div> */}
    </div>
  );
}
