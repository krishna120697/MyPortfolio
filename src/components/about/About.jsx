import React from "react";
import "./About.css";
import Image from "../../assets/avatar.png";

// import AboutBox from "./AboutBox";

const About = () => {
 

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a Computer Science and Engineering student at Chandigarh
              University with a strong passion for software development. I have
              gained hands-on experience through multiple software development
              internships, including at Trilogy Innovations and Attentive.ai,
              where I worked on chatbot development, performance optimization,
              and backend system enhancements. I am proficient in technologies
              like React.js, Node.js, Django, and Redis and have built projects
              ranging from a real-time chatting app to an AI-powered Alzheimer’s
              detection system.
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
           <a
  className="btn"
  href="https://drive.google.com/uc?export=download&id=1gADY87NphXaum8ILOHSVgyyxAy0JoV6G"
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>



          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
