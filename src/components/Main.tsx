import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/headshot.jpeg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/herrabdulbasit" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/chabdulbasit/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abdul Basit</h1>
          <p>Data Scientist / Full Stack Engineer</p>
          <p></p>
          <div className="mobile_social_icons">
            <a href="https://github.com/herrabdulbasit" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/chabdulbasit/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;