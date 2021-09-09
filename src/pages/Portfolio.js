import { Container, Row, Col } from 'react-bootstrap';
import ModalProject from '../components/Modal';

import datas from '../utils/project.json';

const Portfolio = () => {
  const { projects } = datas;
  return (
    <div style={{ minHeight: '100vh' }}>
      <Container>
        <Row style={{ paddingTop: '200px' }}>
          {projects.map((project) => {
            return (
              <Col>
                <ModalProject project={project} key={project.id} />;
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
