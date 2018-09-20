import React from 'react';

import '../styles/resume.css';
import resume from '../images/resume.pdf';

export default class Dashboard extends React.Component {

    render() {
        return (
          <div className="resume-container">

            <div className="resume-download-link">
              <a href={resume} target='_blank'>Download PDF</a>
            </div>

            <div className="resume-document">
              Placeholder for HTML resume
            </div>

          </div>
        );
    }
}
