import React from 'react';
import { connect } from 'react-redux';

import photo from '../images/about-photo.jpg'
import '../styles/about.css';

export class AboutPage extends React.Component {

  render() {

    return (
      <div className="about">

        <div className="about-title">
          <h1>Full Stack Developer</h1>
        </div>

        <div className="about-photo-container">
          <img className="about-photo" src={photo} alt="Joseph Kim"/>
        </div>

        <div className="about-me">
          <h3> 
            Hi, I'm Joe. Nice to meet you!
          </h3>
          <p>
            I'm a full-stack developer based in Atlanta.
          </p>
          <p>
            When I'm not coding up a website, you'll find me hard at work developing video games on Unity and GameMaker Studio or 3D modeling 
            on Blender and Maya.
          </p>
          <p>
            My stack of choice is NodeJS, React and Redux but I'm always hungry to learn new technologies!
          </p>
        </div>

        <div className="about-awards">
          <a className="about-award-link" href="https://hypepotamus.com/people/joseph-kim/" target="_blank" rel="noopener noreferrer">
            <div className="about-award">
              <img className="hypepotamus-logo" src="https://1ycbx02rgnsa1i87hd1i7v1r-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/hypepotamus-masthead.svg"></img>
              <p className="about-award-title">
                Featured Tech Talent
              </p>
              <blockquote className="about-award-statement">
                "Joseph Kim was lured into technology by a constant flow of new ideas for apps and solutions..."
              </blockquote>
            </div>  
          </a>
        </div>

        <div className="about-skills red">
          <i className="far fa-window-maximize fa-4x"></i>
          <div className="about-skills-title-red">
            Front-End Stack
          </div>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>jQuery</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </div>

        <div className="about-skills blue">
          <i className="fas fa-project-diagram fa-4x"></i>
          <div className="about-skills-title-blue">
            Back-End Stack
          </div>
          <p>NodeJS</p>
          <p>ExpressJS</p>
          <p>MongoDB</p>
          <p>PostgreSQL</p>
          <p>Python</p>
          <p>Flask</p>
          <p>C#</p>
        </div>

        <div className="about-skills green">
          <i className="fas fa-cube fa-4x"></i>
          <div className="about-skills-title-green">
            Dev Tools & Frameworks
          </div>
          <div className="about-skills-list-green">
            <p>ES6</p>
            <p>MLab</p>
            <p>Github</p>
            <p>Heroku</p>
            <p>Surge.sh</p>
            <p>Bootstrap</p>
            <p>Bulma</p>
          </div> 
        </div>

        <div className="contact-list">

          <div className="contact email">
            <i className="fab fa-google fa-lg"></i>
            <a href="mailto:gyuhankim@gmail.com" target="_blank" rel="noopener noreferrer">gyuhankim@gmail.com</a>
          </div>

          <div className="contact github">
            <i className="fab fa-github-square fa-lg"></i>
            <a href="https://github.com/gyuhankim" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          <div className="contact linkedin">
            <i className="fab fa-linkedin fa-lg"></i>
            <a href="https://www.linkedin.com/in/joseph-kim-1b4ba6125/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
              
        </div>

      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AboutPage);
