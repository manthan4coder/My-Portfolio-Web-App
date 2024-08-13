import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { Zoom } from "react-awesome-reveal";
import { AiOutlineDownload } from "react-icons/ai";
import images from "../assets";
import { Particle } from "../components";
import "../css/Resume.css";

function Resume() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Zoom>
            <Button
              variant="primary"
              href={images.resumeMK}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <b>
                <AiOutlineDownload />
                &nbsp;Download my Resume
              </b>
            </Button>
          </Zoom>
        </Row>

        <Row className="resume">
          <Document
            file={images.resumeMK}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.8 : 0.55} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Zoom>
            <Button
              variant="primary"
              href={images.resumeMK}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <b>
                <AiOutlineDownload />
                &nbsp;Download my Resume
              </b>
            </Button>
          </Zoom>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
