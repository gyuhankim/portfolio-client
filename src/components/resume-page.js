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
              
              <div className="resume-contact">
                <p className="resume-name">Joseph Kim</p>
                <a href="mailto:gyuhankim@gmail.com" target="_blank" rel="noopener noreferrer">gyuhankim@gmail.com</a>
                <p>Atlanta, GA</p>
              </div>

              <div className="resume-links">
                <p className="resume-profession">FULL STACK WEB DEVELOPER</p>
                <p><a href="https://github.com/gyuhankim" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <p><a href="https://www.linkedin.com/in/joseph-kim-1b4ba6125/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="http://www.josephkim.me/">josephkim.me</a></p>
              </div>

              <div className="resume-section">
                <div className="resume-section-title">Summary</div>
                <p>
                  Full stack developer candidate skilled in writing, clean, testable code. Proficient in mobile-first responsive design and test-driven
                  development. Experience with modern tooling and excited to learn the right tools for the job.
                </p>
              </div>

              <div className="resume-section">
                <div className="resume-section-title">Skills</div>
                <p><span className="bold">Advanced: </span>JavaScript, React, Redux, Node.js, MongoDB,  jQuery, ES6, REST APIs, HTML5, CSS3, Git, GitHub.</p>
                <p><span className="bold">Proficient: </span>PostgreSQL, Python, Flask, C#, Unity3D, TDD with Mocha, Chai, Enzyme and Jest, NPM, webpack and Browserify.</p>
                <p><span className="bold">Expert: </span>Written & verbal communication, project management, wireframing and storyboarding.</p>
              </div>

              <div className="resume-section">
                <div className="resume-section-title">Projects</div> 

                  <div className="resume-project">
                    <span className="bold">Full Stack - </span>
                    <a href="https://mysterious-sands-19667.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Launchpad.gg</a>
                    <span className="bold project-stack">Node, React, Redux, MongoDB, IGDB API</span>
                    <p>A full stack website designed to be the singular source for upcoming video game releases. Users can sign-up/log-in to add games to
                      the “Favorites” list for easy viewing and date tracking.</p>
                  </div>

                  <div className="resume-project">
                    <span className="bold">Full Stack - </span>
                    <a href="http://karpul-client.surge.sh/" target="_blank" rel="noopener noreferrer">
                    Karpül</a>
                    <span className="bold project-stack">Node, React, Redux, MongoDB, MapBox API</span>
                    <p>Karpül is a webapp built to help users find nearby carpools and host new carpools. Utilizing Mapbox’s API and 
                      toast notifications,nearby pickup points, destinations, carpool schedules and alerts are easily viewable.</p>
                  </div>

                  <div className="resume-project">
                    <span className="bold">Full Stack - </span>
                    <a href="https://mighty-anchorage-60704.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    KNOW(tation)</a>
                    <span className="bold project-stack">Node, React, Redux, MongoDB</span>
                    <p>An interactive, spaced-repetition learning app to teach users about Big O Notation and the operational 
                      complexities of various well-known sorting and searching algorithms. 
                      The database (MongoDB) was built to simulate a linked list data structure.</p>
                  </div>

                  <div className="resume-project">
                    <span className="bold">Full Stack - </span>
                    <a href="https://intense-thicket-25944.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    S4</a>
                    <span className="bold project-stack">React, Redux</span>
                    <p>A simple webapp to display custom messages on-screen while screen sharing. Lightweight, 
                      responsive and customizable with various color themes to choose from.</p>
                  </div>

                  <div className="resume-project">
                    <span className="bold">Game Developer - </span>
                    <a href="https://www.youtube.com/watch?v=PW1Rd4iuDz8" target="_blank" rel="noopener noreferrer">
                    CubesRedux</a>
                    <span className="bold project-stack">C#, Unity3D</span>
                    <p>A hybrid rhythm / endless runner game where you control a cube to dodge incoming obstacles to the beat of the music.</p>
                  </div>

              </div>

              <div className="resume-section">
                <div className="resume-section-title">Experience</div>

                <div className="resume-project">
                  <span className="bold">Project Manager, Halo Media</span>
                  <span className="bold project-stack">Jan 2017 - May 2018</span>
                  <p><span className="project-stack">New York, NY</span></p><br />
                  <ul>
                    <li>First point-of-contact to kick off both in-house projects and projects for Fortune 500 companies.</li>
                    <li> Translate client vision into manageable deliverables, 
                      following AGILE best practices, by breaking down into epics and stories.</li>
                    <li>Coordinate resources during project lifecycle to ensure delivery is on track with timeline.</li>
                    <li>Lead daily SCRUMs and post-mortems to review successes and missteps and to promote team alignment.</li>
                  </ul>
                </div>

                <div className="resume-project">
                  <span className="bold">Freelance 3D Modeler, Self Employed</span>
                  <span className="bold project-stack">June 2017 - Present</span>
                  <p><span className="project-stack">Atlanta, GA</span></p><br />
                  <ul>
                    <li>Using Blender, built hard-surface models of transport vehicles for University of Wisconsin.</li>
                    <li>Eliminated all mesh inconsistencies and triangulated vertices to allow for realistic physics simulations.</li>
                    <li>Produced models within polycount budget while maintaining a high level of detail.</li>
                  </ul>
                </div>

              </div>

              <div className="resume-section">
                <div className="resume-section-title">Education</div>
                
                <div className="resume-project">
                  <span className="bold">Software Engineering</span>
                  <span className="bold project-stack">Thinkful</span>

                  <p>Engineering Immersion Program<span className="project-stack">2018</span></p>
                </div>

              </div>

            </div>

          </div>
        );
    }
}
