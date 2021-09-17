import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import logo from '../assets/img/logo.png';
import reactLogo from '../assets/img/react-logo.png';

const NavBar = ({ pathname }) => {
  const history = useHistory();

  return (
    <Navbar expand="sm" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <img
            src={reactLogo}
            className="react-logo d-inline-block align-top"
            alt="logo"
            width={38}
          />
          {''}
          SL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => history.push('/')}
              active={pathname === '/'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => history.push('/works')}
              active={pathname === '/works'}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => history.push('/contact')}
              active={pathname === '/contact'}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav.Link
            className="justify-content-end"
            href="https://github.com/samReact"
            target="_blank"
          >
            <GithubOutlined
              style={{ fontSize: 22, cursor: 'pointer' }}
              className="color-primary"
            />
          </Nav.Link>
          <Nav.Link
            className="justify-content-end"
            href="https://www.linkedin.com/in/samirlehmil/"
            target="_blank"
          >
            <LinkedinOutlined
              style={{ fontSize: 22, cursor: 'pointer' }}
              className="color-primary"
            />
          </Nav.Link>
          <Nav.Link
            className="justify-content-end"
            href="mailto:sam.react001@gmail.com"
          >
            <MailOutlined
              style={{ fontSize: 22, cursor: 'pointer' }}
              className="color-primary"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
