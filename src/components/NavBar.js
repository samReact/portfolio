import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => (
  <Navbar expand="lg" fixed="top" variant="dark">
    <Navbar.Brand href="#home">SL</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto text-white">
        <Nav.Link className="text-white" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="text-white" href="/works">
          Portfolio
        </Nav.Link>
        <Nav.Link className="text-white" href="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
