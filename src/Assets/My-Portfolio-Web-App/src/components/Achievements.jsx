import Card from "react-bootstrap/Card";
import images from "../assets";

function Achievements() {
  return (
    <Card className="quote-card-view">
      <Card.Body className="achievements-container">
        <a
          href="https://app.100xdevs.com/certificate/verify/ZZN8ZT7Z"
          target="blank"
        >
          <img
            src={images.harkirat}
            width={700}
            alt="harkirat"
            className="mk-frame"
          />
        </a>

        <a
          href="https://www.udemy.com/certificate/UC-58c5951d-d5ab-49b2-a8e6-1976f479d47c/"
          target="blank"
        >
          <img
            src={images.udemy}
            width={700}
            alt="udemy"
            className="mk-frame"
          />
        </a>

        <a
          href="https://v1.scrimba.com/certificate/un2n92sD/gfrontend"
          target="blank"
        >
          <img
            src={images.scrimba}
            width={800}
            alt="scrimba"
            className="mk-frame"
          />
        </a>
      </Card.Body>
    </Card>
  );
}

export default Achievements;
