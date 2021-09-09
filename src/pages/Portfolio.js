import { Container, Row, Col } from 'react-bootstrap';
import ModalProject from '../components/Modal';

import datas from '../utils/project.json';

const Portfolio = () => {
  const { projects } = datas;
  return (
    <div style={{ minHeight: '100vh' }}>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Row className="align-items-center">
          {projects.map((project) => {
            return (
              <Col lg={3} md={4} xs={6}>
                <ModalProject project={project} key={project.id} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
