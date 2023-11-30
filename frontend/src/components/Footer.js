import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        {' '}
        <Row className="heading">
          <Col>
            <img src="/images/rectangle.svg" alt="rectangle" /> Contact us
          </Col>
        </Row>
        <Row className="footer-row">
          <Col md={8}>
            <h2>
              Have a project in mind? <br />
              Let's make it happen
            </h2>
          </Col>
          <Col md={4}>
            22 Street Name, Suburb, 8000, <br />
            Cape Town, South Africa <br />
            +27 21 431 0001 <br />
            enquirie@website.co.za
          </Col>
        </Row>
        <Row className="footer-row">
          <Col md={8}>
            <Row>
              <Col md={3}>
                <a href="#">Terms of service</a> <br />
                <a href="#">Privacy policy</a> <br />
                <a href="#">Impressum</a>
              </Col>
              <Col md={3}>
                <a href="https://www.facebook.com">Facebook</a>
                <br />
                <a href="https://www.instagram.com">Instragram</a>
                <br />
                <a href="https://www.twitter.com">Twitter</a>
              </Col>
              <Col md={3}>
                <a href="https://github.com">Github</a>
                <br />
                <a href="https://linkedin.com">Linkedin</a> <br />
                <a href="https://www.microsoft.com/en-us/microsoft-teams/log-in">
                  Teams
                </a>
              </Col>
              <Col md={3}>
                <a href="https://youtube.com">Youtube</a> <br />
                <a href="https://behance.com">Behance</a> <br />
                <a href="https://dribble.com">Dribble</a>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            Explore open jobs <br />
            <br />
            ©2000—2023 Company Name
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
