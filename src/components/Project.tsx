import React from "react";
import ez_office from '../assets/images/ezoffice.png'
import ez_cmms from '../assets/images/cmms.png'
import tableau_airbnb from '../assets/images/tableau_air.png'
import jira_ezo from '../assets/images/jira_ezo.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ezo.io/ezofficeinventory/" target="_blank" rel="noreferrer"><img src={ez_office} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ezo.io/ezofficeinventory/" target="_blank" rel="noreferrer"><h2>EZOfficeInventory</h2></a>
                <p>Worked on EZOfficeInventory during my time at 7vals. Worked extensively on technologies like Ruby on Rails, React, Python. Implemented subscriptions packages using Stripe. Follow the link for a demo. Of course, I cannot share the code because it belongs to the organization.</p>
            </div>

            <div className="project">
                <a href="https://ezo.io/ezo-cmms/" target="_blank" rel="noreferrer"><img src={ez_cmms} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ezo.io/ezo-cmms/" target="_blank" rel="noreferrer"><h2>EZO CMMS</h2></a>
                <p>Worked on EZO CMMS during my time at 7vals. Worked extensively on technologies like Ruby on Rails, React, Python. Implemented subscriptions packages using Stripe. Follow the link for a demo. Of course, I cannot share the code because it belongs to the organization.</p>
            </div>

            <div className="project">
                <a href="https://marketplace.atlassian.com/apps/1220326/ezofficeinventory-asset-management-for-jira?tab=overview&hosting=cloud" target="_blank" rel="noreferrer"><img src={jira_ezo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://marketplace.atlassian.com/apps/1220326/ezofficeinventory-asset-management-for-jira?tab=overview&hosting=cloud" target="_blank" rel="noreferrer"><h2>Jira EZO Confluence App</h2></a>
                <p>Developed Jira Confluence Application for EZOfficeInventory. Wrote this application in Node JS and Postgres. The Application is embedded into Jira Tickets Management and supported Asset Management directly from Jira.</p>
            </div>

            <div className="project">
                <a href="https://public.tableau.com/views/DemoProject_17218232508660/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noreferrer"><img src={tableau_airbnb} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://public.tableau.com/views/DemoProject_17218232508660/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noreferrer"><h2>Tableau Dashboard</h2></a>
                <p>Worked on Tableau Dashboard which analyzes the AirBnB Data. Dataset downloaded from Kaggle.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;