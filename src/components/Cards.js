import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card } from "react-bootstrap";
import hospitalized from "../assets/hospitalized.png";
import infected from "../assets/infected.png";
import recovered from "../assets/recovered.png";
import deaths from "../assets/deaths.png";
function Cards() {
  return (
    <div className="Cards">
      <Container>
        <Row>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={infected} />
            <Card.Body>
              <Card.Title>Infected</Card.Title>
             <h2>0</h2>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={hospitalized} />
            <Card.Body>
              <Card.Title>Hospitalized</Card.Title>
              <h2>0</h2>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={deaths} />
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <h2>0</h2>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={recovered} />
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <h2>0</h2>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
