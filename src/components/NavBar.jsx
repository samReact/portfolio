import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import reactLogo from '../assets/img/react-logo.png';

import sun from '../assets/img/sun.svg';
import moon from '../assets/img/moon.svg';

const NavBar = ({ pathname, theme, setTheme }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant={theme === 'dark' ? 'dark' : 'light'}
    >
      <Container fluid>
        <Navbar.Brand>
          <img
            src={reactLogo}
            className="react-logo d-inline-block align-top ml-2"
            alt="logo"
            width={38}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              active={pathname === '/portfolio'}
              exact
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              active={pathname === '/portfolio/about'}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/works"
              active={pathname === '/porfolio/works'}
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="justify-content-end"
              href="https://github.com/samReact"
              target="_blank"
              style={{ padding: 8 }}
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
              style={{ padding: 8 }}
            >
              <LinkedinOutlined
                style={{ fontSize: 22, cursor: 'pointer' }}
                className="color-primary"
              />
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              href="mailto:sam.react001@gmail.com"
              style={{ padding: 8 }}
            >
              <MailOutlined
                style={{ fontSize: 22, cursor: 'pointer' }}
                className="color-primary"
              />
            </Nav.Link>
            <Nav.Link
              className="justify-content-end"
              style={{ padding: 8 }}
              onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark')}
              href="#"
            >
              <img
                src={theme === 'dark' ? sun : moon}
                alt="dark"
                width={32}
                height={32}
                className="theme-img"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
