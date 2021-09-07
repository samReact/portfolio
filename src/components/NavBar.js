import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  return (
    <Navbar expand="lg" fixed="top" variant="dark">
      <Navbar.Brand href="#home">SL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto text-white">
          <Nav.Link className="text-white" onClick={() => history.push('/')}>
            Home
          </Nav.Link>
          <Nav.Link
            className="text-white"
            onClick={() => history.push('/works')}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className="text-white"
            onClick={() => history.push('/contact')}
          >
            Contact
          </Nav.Link>
        </Nav>
        <Navbar.Text className="justify-content-end">Hello !</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
