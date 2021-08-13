import { Nav } from 'react-bootstrap';

const NavBar = () => (
  <Nav
    defaultActiveKey="/home"
    as="ul"
    // bg="dark"
    style={{
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: '100',
    }}
  >
    <Nav.Item as="li">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-1">Work</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">Contact</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default NavBar;
