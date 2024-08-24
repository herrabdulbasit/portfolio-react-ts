import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {

  const s_vals_exp = [
    'Indulged in Design Discussions with the architecture team',
    'Lead small teams for different tasks',
    'Implemented and trained various Machine Learning models',
    'Worked intensively on the infrastructure team and with cloud technologies such as AWS and Azure',
    'Designing and developing new features for SaaS products used by fortune 500 companies',
    'Code reviews',
    'Conducting interviews for hiring new engineers',
    'Training of new hires/ fresh grads hires'
  ]

  const freelance_exp = [
    'Contributed to the core backend of a CRM application in NodeJS(Express), adding several new features with a solid suit of unit tests to ensure reliability',
    'Implemented end-to-end ETL pipelines using Python, AWS, and Apache AirFlow to provide insightful business analytics',
    'Implemented the Stripe gateway to help with online payments, while using JWT to ensure the safety of the system.',
    'Designed user-friendly interfaces using React TypeScript, lazy loading, and suspense to ensure a great user experience',
    'Administered and maintained the Salesforce CRM platform, ensuring system stability, security, and performance to support business operations and sales processes'
  ]

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2021 - March 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer II</h3>
            <h4 className="vertical-timeline-element-subtitle">7vals</h4>
            <h4 className="vertical-timeline-element-subtitle">Lahore, Pakistan</h4>
            <p>
              Full-stack Web Development, Machine Learning, Project Management
            </p>

            <ul>
              { s_vals_exp.map(exp_item => (<li> {exp_item} </li>))}
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2020 - March 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Upwork/Fiverr</h4>
            <h4 className="vertical-timeline-element-subtitle">Lahore, Pakistan</h4>
            <p>
              Full-stack Web Development, Salesforce Administrator
            </p>

            <ul>
              { freelance_exp.map(exp_item => (<li> {exp_item} </li>))}
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="items-container">
        <h1>Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">Masters in Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">FAU Erlangen-Nürnberg</h4>
            <h4 className="vertical-timeline-element-subtitle">Bavaria, Germany</h4>
           
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="October 2017 - July 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelors in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of the Punjab</h4>
            <h4 className="vertical-timeline-element-subtitle">Lahore, Pakistan</h4>
           
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;