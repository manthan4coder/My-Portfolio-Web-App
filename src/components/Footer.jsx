import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            built by <b>Manthan Kumar</b>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright © {year} ||{" "}
            <strong className="purple">
              <Link
                to="https://manthan-mk.vercel.app/"
                className="footer-link"
                target="_blank"
              >
                Manthan-MK
              </Link>
            </strong>
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <Link
                to="https://github.com/Mk4Levi"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </Link>
            </li>
            <li className="social-icons">
              <Link
                to="https://www.linkedin.com/in/mk4coder"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="social-icons">
              <Link
                to="https://twitter.com/Mk4Coder/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <AiOutlineTwitter />
              </Link>
            </li>
            <li className="social-icons">
              <Link
                to="https://discord.me/manthan-discord-server"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Discord"
              >
                <FaDiscord />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
