import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';

const ModalProject = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {project.name}
      </Button>

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
