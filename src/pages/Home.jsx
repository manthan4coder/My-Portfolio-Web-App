import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import images from "../assets";
import { Particle } from "../components";
import Home2 from "./Home2";
import "../css/Home.css";

function Home() {
  return (
    <Container>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <Zoom>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Manthan Kumar </strong>
                </h1>

                <div className="typewriter-section">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer ",
                        "Open Source Contributor ",
                        "React Developer ",
                        "Tech Enthusiast ... ",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      cursor: ".",
                    }}
                  />
                </div>
              </Zoom>
            </Col>

            <Col md={4}>
              <Zoom>
                <img
                  src={images.homeLogo}
                  alt="home pic"
                  className="img-fluid home-img mk-frame"
                  style={{ maxHeight: "600px" }}
                />
              </Zoom>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </Container>
  );
}

export default Home;
