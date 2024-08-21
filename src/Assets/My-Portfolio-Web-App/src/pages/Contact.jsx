import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Zoom, Slide } from "react-awesome-reveal";
import { SiGmail } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import { Particle, Socials, Form } from "../components";
import "../css/Contact.css";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <Slide>
              <h1 style={{ fontSize: "2.0em" }}>
                CONNECT With <strong className="purple">Me</strong>
              </h1>
            </Slide>

            <Card className="quote-card-view">
              <Card.Body>
                <Slide delay={"20"}>
                  <ul className="home-about-social-links">
                    <Socials />
                  </ul>
                </Slide>
                <br />
                <br />
                <Slide delay={"20"}>
                  <ul className="about-activity">
                    <li className="about-activity">
                      <SiGmail /> &nbsp; Mail to :{" "}
                      <Link
                        className="purple"
                        style={{ textDecoration: "none" }}
                        to="mailto:mksoul1811@gmail.com"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <strong className="email">mksoul1811@gmail.com</strong>
                      </Link>
                      <br />
                      <br />
                    </li>
                    <li className="about-activity">
                      <GoLocation /> &nbsp; Location :{" "}
                      <Link
                        className="purple"
                        style={{ textDecoration: "none" }}
                        to="https://www.google.com/maps/place/Manthan+Kumar/@12.8501854,77.6500098,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae6b86b6f5358d:0x2929a91182acab3e!8m2!3d12.8501802!4d77.6525847!16s%2Fg%2F11twhxg9wd?entry=ttu"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <strong className="email">Bangalore, India</strong>
                      </Link>
                    </li>{" "}
                    <br />
                  </ul>
                </Slide>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5}>
            <Zoom>
              <Form />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
