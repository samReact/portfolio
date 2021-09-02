import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => (
  <Navbar expand="lg" fixed="top" className="text-white">
    <Navbar.Brand href="#home" className="text-white">
      SL
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto text-white">
        <Nav.Link className="text-white" href="/home">
          Home
        </Nav.Link>
        <Nav.Link className="text-white" href="/portfolio">
          Portfolio
        </Nav.Link>
        <Nav.Link className="text-white" href="#link">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
