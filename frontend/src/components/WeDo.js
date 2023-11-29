import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function WeDo() {
  return (
    <Container>
      <Row style={{ 'margin-top': 10, 'margin-bottom': 10 }}>
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
          <Card style={{ 'border-style': 'none' }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/web_dev_icon.svg"
                alt="Web Dev Icon"
                style={{ height: 50, width: 50 }}
              />
              <Card.Title style={{ 'margin-top': 20 }}>
                <strong>Web development</strong>
              </Card.Title>
              <Card.Text style={{ 'margin-top': 20 }}>
                We use cutting-edge web development technologies to help our
                clients fulfill their business goals through functional,
                reliable solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card style={{ 'border-style': 'none' }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/ux_icon.svg"
                alt="Web Dev Icon"
                style={{ height: 50, width: 50 }}
              />
              <Card.Title style={{ 'margin-top': 20 }}>
                <strong>User experience & design</strong>
              </Card.Title>
              <Card.Text style={{ 'margin-top': 20 }}>
                Our complete web design services will bring your ideas to life
                and provide you with a sleek, high-performing product that
                elevates your business.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card style={{ 'border-style': 'none' }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/app_dev_icon.svg"
                alt="Web Dev Icon"
                style={{ height: 50, width: 50 }}
              />
              <Card.Title style={{ 'margin-top': 20 }}>
                <strong>Mobile app development</strong>
              </Card.Title>
              <Card.Text style={{ 'margin-top': 20 }}>
                Our extensive mobile development experience allows us to create
                custom native and cross-platform iOS and Android mobile
                solutions for our clients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card style={{ 'border-style': 'none' }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src="/images/blockchain_icon.svg"
                alt="Web Dev Icon"
                style={{ height: 50, width: 50 }}
              />
              <Card.Title style={{ 'margin-top': 20 }}>
                <strong>Blockchain solutions</strong>
              </Card.Title>
              <Card.Text style={{ 'margin-top': 20 }}>
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
