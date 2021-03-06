import { Container, Row, Col } from 'react-bootstrap';
import ModalProject from '../components/Modal';

import datas from '../utils/project.json';

const Portfolio = ({ theme }) => {
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
              <Col lg={3} md={4} xs={6} key={project.id}>
                <ModalProject project={project} theme={theme} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
