import { useState } from 'react';
import { Badge, Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';

const ModalProject = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="logo-container" onClick={handleShow}>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/img/${project.logo}`}
          alt="logo"
          width="100%"
        />
        <div className="badge-container">
          {project.tags.map((tag) => (
            <Badge variant="primary" style={{ margin: 3 }}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <AwesomeSlider animation="cubeAnimation">
            {project.img.map((img) => {
              return (
                <div data-src={`${process.env.PUBLIC_URL}/img/${img}.jpg`} />
              );
            })}
          </AwesomeSlider>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProject;
