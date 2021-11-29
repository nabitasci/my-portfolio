import React from 'react';

export default function Footer(props){

  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container__cus grid">
          <div>
            <h1 className="footer__title">Nabi</h1>
            <span className="footer__subtitle">Developer</span>
          </div>
          <ul className="footer__links">
          <li>
            <a href="#services" className="footer__link"> Services</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link"> Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="footer__link"> Contact Me</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a className="footer__social" href="https://www.facebook.com" target="_blank">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a className="footer__social" href="https://www.instagram.com" target="_blank">
          <i className="uil uil-instagram"></i>
          </a>
          <a className="footer__social" href="https://www.twitter.com" target="_blank">
          <i className="uil uil-twitter-alt"></i>
          </a>
        </div>
        </div>
        <p className="footer__copy">&#169; Nabi. All right reserved.</p>
      </div>
    </footer>
  );

}