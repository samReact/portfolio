import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import reactLogo from '../assets/img/react-logo.png';
import etherumLogo from '../assets/img/etherum.png';

import sun from '../assets/img/sun.svg';
import moon from '../assets/img/moon.svg';

const NavBar = ({ pathname, theme, setTheme }) => {
  const history = useHistory();

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant={theme === 'dark' ? 'dark' : 'light'}
    >
      <Container fluid>
        <Navbar.Brand>
          <img src={etherumLogo} className="mr-1" alt="logo" width={28} />
          SL
          {''}
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
              onClick={() => history.push('/')}
              active={pathname === '/'}
              href="#"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => history.push('/about')}
              active={pathname === '/about'}
              href="#"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => history.push('/works')}
              active={pathname === '/works'}
              href="#"
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
