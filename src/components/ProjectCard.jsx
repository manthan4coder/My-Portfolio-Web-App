import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Slide } from "react-awesome-reveal";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Slide>
      <Card className="project-card-view">
        <Card.Img
          className="project-img"
          variant="top"
          src={props.imgPath}
          alt="card-img"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button
            variant="primary"
            href={props.ghLink}
            style={{ margin: "1px" }}
            target="_blank"
          >
            <BsGithub />
            &nbsp; <b>GitHub's Repo</b>
          </Button>
          {"\n"}
          {"\n"}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              style={{ margin: "10px" }}
              target="_blank"
            >
              <AiOutlineFundProjectionScreen />
              &nbsp; <b>Project's Link</b>
            </Button>
          )}
        </Card.Body>
      </Card>
    </Slide>
  );
}
export default ProjectCards;
