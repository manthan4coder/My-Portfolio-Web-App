import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FiHome } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";
import { ImPhone } from "react-icons/im";
import logo from "../assets/MK-Logo.png";
import "../css/Navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  const location = useLocation();

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid App-logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className={location.pathname === "/" ? "active" : ""}>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <FiHome style={{ marginBottom: "2px" }} />
                &nbsp; Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={location.pathname === "/about" ? "active" : ""}
            >
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <IoIosContact style={{ marginBottom: "2px" }} /> About Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={location.pathname === "/skills" ? "active" : ""}
            >
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
                <FaReact style={{ marginBottom: "2px" }} /> My Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={location.pathname === "/projects" ? "active" : ""}
            >
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                <GoFileSubmodule style={{ marginBottom: "2px" }} /> My Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={location.pathname === "/resume" ? "active" : ""}
            >
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> My Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={location.pathname === "/contact" ? "active" : ""}
            >
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <ImPhone style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
