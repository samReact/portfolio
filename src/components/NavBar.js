import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import logo from '../assets/img/logo.png';

const NavBar = ({ pathname }) => {
  const history = useHistory();

  return (
    <Navbar expand="sm" fixed="top" variant="dark">
      <Navbar.Brand>
        <img src={logo} alt="logo" width={38} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push('/')} active={pathname === '/'}>
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
            style={{ color: '#39bb88', fontSize: 28, cursor: 'pointer' }}
          />
        </Nav.Link>
        <Nav.Link
          className="justify-content-end"
          href="https://www.linkedin.com/in/samirlehmil/"
          target="_blank"
        >
          <LinkedinOutlined
            style={{ color: '#39bb88', fontSize: 28, cursor: 'pointer' }}
          />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
