import { Container, Row, Col } from 'react-bootstrap';
import laptop from '../assets/img/home-laptop.jpg';
const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-dark" style={{ height: '100vh' }}>
      <Container>
        <Row style={{ paddingTop: '200px' }}>
          <Col>
            <img src={laptop} class="img-fluid" alt="Responsive"></img>
          </Col>
          <Col>
            <img src={laptop} class="img-fluid" alt="Responsive"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
