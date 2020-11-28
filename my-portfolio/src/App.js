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
              Hi! I’m a Mohamed, I'm a software developer with 4 years of
              experience developing full-stack applications and managing cloud
              infrastructure, with a good knowledge of front-end technologies
              and an eye for design
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
