import React from 'react';

export const Header = () => {
  return <div>
      <header className="header">
      <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="navbar">
        <div className="container"><a className="navbar-brand" href="index.html">
            <img src="./img/logo.svg" alt="" width="45"/></a>
          <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-uppercase active" href="#hero">Home </a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#expertise">Expertise</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link text-uppercase" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>;
};
