import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './CaseStudies.css';

function CaseStudies() {
  return (
    <Container>
      <Row className="heading">
        <Col>
          <img src="/images/rectangle.svg" alt="rectangle" /> Case studies
        </Col>
      </Row>
      <Row>
        <Carousel>
          <Carousel.Item>
            <Image
              className="carousel-image"
              src="/images/olympian.jpeg"
              text="First slide"
            />
            <Carousel.Caption>
              <h3>The Olympian</h3>
              <p>
                The only athlete in the world to do her Olympic routine in 2020.{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="carousel-image"
              src="/images/dragon.jpeg"
              text="Second slide"
            />
            <Carousel.Caption>
              <h3>The Savings Jar</h3>
              <p>Grow your savings treasure and grow your dragon.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="carousel-image"
              src="/images/skhokho.jpeg"
              text="Third slide"
            />
            <Carousel.Caption>
              <h3>Skhokho seMali</h3>
              <p>
                Helping South Africans become #CashCleva with Skhokho and
                TymeBank.{' '}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
export default CaseStudies;
