import Card from "react-bootstrap/Card";
import { FaSlackHash } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Slide delay={"15"}>
            <h4 style={{ textAlign: "justify" }}>
              Hi Everyone, I am{" "}
              <strong className="purple"> Manthan Kumar </strong>
              from <strong className="purple"> Bangalore, India.</strong>
              <br />
              <br />
              About Me :
            </h4>
          </Slide>

          <ul>
            <Slide delay={"25"}>
              <li className="about-activity">
                <FaSlackHash /> I am a Full-Stack Developer&nbsp;
                <a
                  className="purple"
                  style={{ textDecoration: "none" }}
                  href="https://www.javatpoint.com/mern-stack#:~:text=What%20is%20MERN%20Stack%3F,of%20full%2Dstack%20web%20applications."
                  target={"_blank"}
                  rel="noreferrer"
                >
                  (MERN)
                </a>
              </li>
              <li className="about-activity">
                <FaSlackHash />
                &nbsp; Completed my B.Tech from NIT-AP&nbsp;(2024)
              </li>
              <li className="about-activity">
                <FaSlackHash /> I&apos;m passionate about{" "}
                <strong className="purple">Open-Source Contribution</strong>,
                React-Development, Full-Stack Web Dev, WEB-3 and learning new &
                trending Technological skills
              </li>
              <li className="about-activity">
                <FaSlackHash /> I was a Coordinator of Coding Club in my
                College.
              </li>
              <li className="about-activity">
                <FaSlackHash /> I am always eager to learn and work with new
                technologies and share my knowledge with others.
              </li>
              {/* <li className="about-activity">
                <FaSlackHash /> I am excited to continue growing and learning in
                my field, and I look forward to connecting with others who share
                my interests.
              </li> */}
              {/* <li className="about-activity">
                <FaSlackHash /> In my free time, I like to play Basketball,
                compete in Chess.com and explore Physics.
              </li> */}
              <li className="about-activity">
                <FaSlackHash /> I have completed{" "}
                <strong className="purple">Certifications</strong> in several
                essential courses to advance my career as a developer. Below is
                a list of these certificates, along with their links 👇🏻
              </li>
            </Slide>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
