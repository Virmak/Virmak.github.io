import { Component } from "react";
import Landing from "./landing/Landing";
import TimelineItem from "./timeline/Timeline";
import profile from './projects.json';
import Cards from "./card/Cards";
import Footer from './footer/Footer';

class App extends Component {
  state = {
    profile: profile,
  };

  render() {
    return (
      <div>
        <Landing profile={this.state.profile} />
        <section id="about-me">
          <h1 className="section-title">About me</h1>
          <div className="content">
            <p>
            I'm Mohamed, I'm a full-stack software developer with more than 4 years of experience developing and maintaining web apps, APIs, scrapers, and managing cloud infrastructure. 
            As a passionate programmer, I love building things and turn ideas into reality, I’ve joined up on multiple occasions with cross-disciplinary team members, where we developed prize-winning ideas within 24 hours in hackathons. I’ve written software for different kinds of things, like IoT devices, small games, web, and mobile apps. 
            </p>
          </div>
        </section>

        <section id="experiences">
          <h1 className="section-title">Experiences</h1>
          <div className="timeline">
            <div className="wrapper">
              <TimelineItem projects={this.state.profile.projects} />
            </div>
          </div>
        </section>

        <section id="skills">
          <h1 className="section-title">My Skills</h1>
          <div className="content">              
              <Cards skills={this.state.profile.skills}></Cards>
          </div>
        
        </section>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }
}

export default App;
