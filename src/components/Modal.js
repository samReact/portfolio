import { useState } from 'react';
import { Badge, Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';

const ModalProject = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <div class="logo-container">
        {project.logo ? (
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/img/${project.logo}`}
            alt="logo"
            width="100%"
          />
        ) : (
          <h6 className="text-white text-center">{project.name}</h6>
        )}
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
