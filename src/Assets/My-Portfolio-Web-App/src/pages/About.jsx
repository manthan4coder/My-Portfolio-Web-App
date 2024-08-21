import { Container, Row, Col } from "react-bootstrap";
import { Zoom, Slide } from "react-awesome-reveal";
import images from "../assets";
import { Particle, AboutCard, Achievements } from "../components";
import "../css/About.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "1%" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "1%",
              paddingBottom: "5%",
            }}
          >
            <Slide>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "2%" }}>
                About <strong className="purple">Me</strong> and my{" "}
                <strong className="purple">Certifications </strong>
              </h1>
            </Slide>

            <AboutCard />
          </Col>

          <Col md={5} style={{ paddingTop: "12%", paddingBottom: "5%" }}>
            <Zoom>
              <div className="img-container mk-frame">
                <div className="outer-circle">
                  <div className="inner-circle">
                    <img
                      src={images.myImg2}
                      className="about-mkImg"
                      alt="about"
                    />
                  </div>
                  {/* <span></span>
                  <span></span>
                  <span></span>
                  <span></span> */}
                </div>
              </div>
            </Zoom>
          </Col>
          <h1>CERTIFICATES OF ACHIEVEMENTS :-</h1>
        </Row>
      </Container>

      <Achievements />
    </Container>
  );
}

export default About;
