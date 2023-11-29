import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Hero.css';

function Hero() {
  return (
    <>
      <Card className="bg-dark text-white hero-card">
        <Card.Img
          src="/images/confidence.jpeg"
          style={{ height: 400 }}
          alt="Card image"
        />
        <Card.ImgOverlay className="d-flex flex-row">
          <Card.Body className="align-self-end">
            <Card.Title>
              <h1>Live with Confidence</h1>
            </Card.Title>
            <Card.Text>
              Jose Mourinho brings confidence to pan-African Sanlam campaign
            </Card.Text>
            <Button
              style={{
                'background-color': '#70259b',
                border: 'none',
                'border-radius': 20,
              }}
            >
              View project
            </Button>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
export default Hero;
