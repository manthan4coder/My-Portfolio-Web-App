import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import { ProjectCard, Particle } from "../components";
import data from "../assets/data";
import "../css/Project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Zoom>
          <h1 className="project-heading">
            My <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are the projects I've worked on recently.
          </p>
        </Zoom>
        <Row
          className="projects-container"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          {data.projectsDB.map((myproj, i) => {
            return (
              <Col md={4} className="project-card" key={i + 1}>
                <ProjectCard
                  imgPath={myproj.imgPath}
                  description={myproj.description}
                  ghLink={myproj.ghLink}
                  demoLink={myproj.demoLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
