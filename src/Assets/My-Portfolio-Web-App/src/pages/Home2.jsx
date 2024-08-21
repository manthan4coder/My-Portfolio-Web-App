import { Container, Row, Col } from "react-bootstrap";
import { Zoom, Slide } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import images from "../assets";
import { Socials } from "../components";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Slide>
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
            </Slide>
            <Slide delay={"20"}>
              <p className="home-about-body">
                Welcome to my portfolio web-app! I'm{" "}
                <b className="purple">Manthan</b>, a passionate Full Stack
                Developer with a deep interest for crafting innovative and
                high-quality digital solutions.
                <br />
                <br />I thrive on the thrill of{" "}
                <b className="purple">problem-solving</b> and enjoy turning
                complex challenges into elegant solutions. Whether it's creating
                intuitive user interfaces, optimizing database performance, or
                implementing secure authentication systems, I am driven by a
                commitment to delivering exceptional results.
                <br />
                <br />
                <b className="purple">Collaboration</b> and{" "}
                <b className="purple">communication</b> are at the core of my
                work philosophy. I thrive in diverse teams, where I can leverage
                my strong interpersonal skills to effectively communicate ideas,
                contribute insights, and work together towards a common goal.
                <br />
                <br />
                Constantly staying abreast of emerging trends and advancements
                in the tech industry, I strive to incorporate the best practices
                and industry standards into my work, ensuring that the solutions
                I build are future-proof and adaptable.
                <br />
                <br />
                Beyond programming, I am a{" "}
                <b className="purple">continuous learner</b>
                , always eager to explore new technologies and expand my skill
                set. I believe in the power of lifelong learning to foster
                personal and professional growth.
                <br />
                <br />
                Feel free to <b className="purple">explore my portfolio</b> to
                see some of the projects I've worked on. If you have any
                questions or would like to discuss a potential{" "}
                <b className="purple">collaboration</b>, please don't hesitate
                to <b className="purple">reach out</b> via "Contact Me" section.
                I'm excited to connect with like-minded individuals and
                organizations who share a passion for leveraging technology to
                make a positive impact.
                <br />
                <br />
                And also my hobbies are development, playing Basketball, CHESS,{" "}
                <a
                  className="purple"
                  style={{ textDecoration: "none" }}
                  href="https://anilist.co/user/manthan4anime/mangalist"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  title="AniList-Manga"
                >
                  reading Manga,&nbsp;
                </a>
                watching Movies &&nbsp;
                <a
                  className="purple"
                  style={{ textDecoration: "none" }}
                  href="https://anilist.co/user/manthan4anime/animelist"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  title="AniList-Anime"
                >
                  Anime
                </a>
                .
                <br />
                ( It's a lot, right! )
                <br />
                <br />
                Thank you for visiting, and I look forward to connecting with
                you soon!
              </p>
            </Slide>
          </Col>

          <Col md={4} className="myAvtar">
            <Slide>
              <Tilt>
                <img src={images.myImg} className="imgmk-fluid" alt="avatar" />
              </Tilt>
            </Slide>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <Zoom>
              <h1>CONNECT WITH ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <Socials className="socials-comp" />

                {/* <li className="social-icons">
                  <a
                    href="https://github.com/Mk4Levi"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/mk4coder"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Mk4Coder/"
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://discord.io/manthan-discord"
                    target="_blank"
                    rel="noreferrer"
                    title="Discord"
                    className="icon-colour home-social-icons"
                  >
                    <FaDiscord />
                  </a>
                </li> */}
              </ul>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
