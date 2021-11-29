import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'

export default function NavBar () {
  const [isActive, setIsActive] = useState(false);

  const [isDark, setIsDark] = useState(true);

  const menuCss = {
    'bottom': isActive ? "0": "-100%"
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);


  return (
      <header id="header" className={offset>=80 ? 'header scroll-header': 'header'}>
          <nav className="nav container__cus"> 
          <NavLink className="nav__logo nav__link" to='/' exact >NABI</NavLink>
            <div className="nav__menu" style={menuCss} id="nav-menu">
              <ul className="nav__list grid">
              <li className="nav__item">
                <NavLink to="/" activeClassName="active-link" className="nav__link" exact>
                  <i className="uil uil-estate nav__icon"></i>
                  {" "}Home
                  </NavLink>
                
                </li>
                <li className="nav__item">
                  <NavLink to="/post" activeClassName="active-link" className="nav__link">
                <i className="uil uil-blogger-alt nav__icon"></i>
                  {" "}Blog Posts
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/project" className="nav__link" activeClassName="active-link">
                  <i className="uil uil-brackets-curly nav__icon"></i> 
                  {" "}
                  Projects
                  </NavLink>
                  
                </li>
                <li className="nav__item">
                  <NavLink to="/about" className="nav__link" activeClassName="active-link"> 
                <i className="uil uil-user nav__icon"></i>
                {" "}
                About Me! 
                </NavLink>
                
                </li>
              </ul>
              <i className="uil uil-times nav__close nav__icon" id="nav-close" onClick={() => setIsActive(false)}></i>
            </div>
            <div className="nav__btns">
              <i className={isDark?"uil uil-moon change-theme dark-theme":"uil uil-sun change-theme"} id="theme-button" onClick={() => {setIsDark(!isDark)
              document.body.classList.toggle('dark-theme')}}></i>
              <div className="nav__toggle" id="nav-toggle">
                <i className="uil uil-apps nav__icon"  onClick={() => setIsActive(true)}></i>
              </div>
            </div>  
          </nav>
          
      </header>
  )
}