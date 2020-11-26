import React from 'react';
import github from '../images/github-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <address className="footer__author">&copy; 2020 Vladimir Ermolaev</address>
      <a className="footer__link" href="https://github.com/Vladimir-art/web-weather" target="_blank" rel="noreferrer">
        <img className="footer__icon" alt="GitHub" src={github} />
      </a>
    </footer>
  )
}

export default Footer;
