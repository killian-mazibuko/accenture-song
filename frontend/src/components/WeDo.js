import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WeDo.css';

function WeDo() {
  return (
    <Container>
      <Row className="heading">
        <Col>
          <img src="/images/rectangle.svg" alt="rectangle" /> What we do
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <h2>
              <strong>
                We offer a complete range of bespoke design and development
                services to help you turn your ideas into digital masterpieces
              </strong>
            </h2>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          {' '}
          <Card className="no-border">
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/web_dev_icon.svg"
                alt="Web Dev Icon"
                className="do-icon"
              />
              <Card.Title className="do-card-item">
                <strong>Web development</strong>
              </Card.Title>
              <Card.Text className="do-card-item">
                We use cutting-edge web development technologies to help our
                clients fulfill their business goals through functional,
                reliable solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card className="no-border">
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/ux_icon.svg"
                alt="Web Dev Icon"
                className="do-icon"
              />
              <Card.Title className="do-card-item">
                <strong>User experience & design</strong>
              </Card.Title>
              <Card.Text className="do-card-item">
                Our complete web design services will bring your ideas to life
                and provide you with a sleek, high-performing product that
                elevates your business.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card className="no-border">
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/app_dev_icon.svg"
                alt="Web Dev Icon"
                className="do-icon"
              />
              <Card.Title className="do-card-item">
                <strong>Mobile app development</strong>
              </Card.Title>
              <Card.Text className="do-card-item">
                Our extensive mobile development experience allows us to create
                custom native and cross-platform iOS and Android mobile
                solutions for our clients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card className="no-border">
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/blockchain_icon.svg"
                alt="Web Dev Icon"
                className="do-icon"
              />
              <Card.Title className="do-card-item">
                <strong>Blockchain solutions</strong>
              </Card.Title>
              <Card.Text className="do-card-item">
                We conduct market research to determine the optimal
                blockchain-based solutions to help you grow your company and
                achieve your business goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default WeDo;
