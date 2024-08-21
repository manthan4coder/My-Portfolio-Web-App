import { Container } from "react-bootstrap";
import { Zoom, Slide } from "react-awesome-reveal";
import Card from "react-bootstrap/Card";
import { Particle, SkillCard } from "../components";
import data from "../assets/data";
import "../css/Skills.css";

function Skill() {
  return (
    <Container fluid className="skill-section">
      <Particle />
      <Container>
        <Zoom>
          <h1 style={{ color: "#ffffff" }}>
            <b>What Do I Offer</b>
          </h1>
        </Zoom>
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <div className="skills-flex">
                <div className="skills">
                  <Slide>
                    <h2>
                      <b>
                        My <strong className="purple">Skills </strong> &{" "}
                        <strong className="purple">Technologies</strong> :
                      </b>
                    </h2>
                  </Slide>
                  <br />
                  <Zoom>
                    <div className="skills-container">
                      {data.skillsDB.map((myskill, i) => {
                        return (
                          <SkillCard
                            key={i + 1}
                            skill={myskill.skill}
                            link={myskill.link}
                            img={myskill.img}
                          />
                        );
                      })}
                    </div>
                  </Zoom>
                </div>
                <div className="skill-details">
                  <Zoom direction="right">
                    <div>
                      <br />
                      <u># Development Services :–</u>
                      <ul>
                        <li>Custom web application development</li>
                        <li>Responsive and adaptive web design</li>
                        <li> API integration and development</li>
                        <li>Database design and management</li>
                        <li>Performance optimization and debugging</li>
                      </ul>
                      <br />
                      <u># Specialized Areas :–</u>
                      <ul>
                        <li>Full-stack development solutions</li>
                        <li> E-commerce platforms</li>
                        <li> Content Management Systems (CMS)</li>
                        <li>
                          {/* User experience (UX) and user interface (UI) design */}
                          UI and UX designing
                        </li>
                      </ul>
                      <br />
                      <u># Process and Approach :–</u>
                      <ul>
                        <li> Agile development methodology</li>
                        <li> Collaborative project management</li>
                        <li> Focus on clean, maintainable code</li>
                        <li> Emphasis on user-centric design</li>
                      </ul>
                      <br />
                      <u># Additional Offerings :–</u>
                      <ul>
                        <li> Consultation and strategy planning</li>
                        <li> Code reviews and quality assurance</li>
                        <li> Ongoing maintenance and support</li>
                      </ul>
                      <br />
                    </div>
                  </Zoom>
                </div>
              </div>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Skill;
