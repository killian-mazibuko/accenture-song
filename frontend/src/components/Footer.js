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
                Terms of service <br />
                Privacy policy <br />
                Impressum
              </Col>
              <Col md={3}>
                Facebook <br />
                Instagram <br />
                Twitter
              </Col>
              <Col md={3}>
                Github <br />
                Linkedin <br />
                Teams
              </Col>
              <Col md={3}>
                Youtube <br />
                Behance <br />
                Dribbble
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
