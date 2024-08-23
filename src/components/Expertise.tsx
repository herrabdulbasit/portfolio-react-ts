import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Java Spring Boot",
    "SaaS",
    "Flask",
    "Python",
    "SQL",
    "Ruby on Rails",
    "Databases",
    "API Integrations",
    "SAML/OKTA"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Azure Machine Learning",
    "Azure Databricks",
    "CI/CD",
    "ETL"
];

const labelsThird = [
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Reinforcement Learning",
    "Deep Learning",
    "Tableau",
    "Power BI",
    "MS Excel"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of SaaS web applications from scratch using modern technologies such as React, Ruby on Rails and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud and Infra</h3>
                    <p>I am proficient in Cloud technologies. I have experience in Deployments, CI/CD pipelines, ETL pipelines, EC2, Data Blobs and a range of cloud technologies. I have experience with both AWS and Azure cloud. This ultimately will help me in Data Engineering tasks</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & Analysis</h3>
                    <p>I have gathered expertise in Data Science, Machine Learning and Data Analytics during my Master's degree in Data Science. I know various Machine Lerning techniques such as Reinforcement Learning, Deep Learning, Training and Deployment of Machine Learning models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;