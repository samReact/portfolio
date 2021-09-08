import { Container, Row, Col } from 'react-bootstrap';
// import laptop from '../assets/img/coming-soon.jpg';
import datas from '../utils/project.json';

const Portfolio = () => {
  const { projects } = datas;
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      <Container>
        <Row style={{ paddingTop: '200px' }}>
          {projects.map((project) => {
            return (
              <Col lg={6} key={project.id} className="mt-4 mb-5">
                <img
                  src={process.env.PUBLIC_URL + '/img/coming-soon.jpg'}
                  className="img-fluid"
                  alt={project.name}
                  title={project.name}
                ></img>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
