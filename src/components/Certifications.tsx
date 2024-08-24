import React from "react";
import ms_cert from '../assets/images/ms_cert.svg'
import '../assets/styles/Project.scss';

function Certifications() {
  return (
    <div className="projects-container" id="certifications">
        <h1>Certifications</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" rel="noreferrer"><img src={ms_cert} className="zoom" alt="thumbnail" width="100%"/></a>
                <h3>Microsoft Power BI Data Analyst Associate (In Progress)</h3>
            </div>
        </div>
    </div>
  );
}

export default Certifications;