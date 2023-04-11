import { HeartFilled } from '@ant-design/icons';
import { Container, Navbar } from 'react-bootstrap';

const Footer = ({ theme }) => {
  return (
    <Navbar fixed="bottom" variant={theme}>
      <Container className="justify-content-center">
        <Navbar.Text className="align-items-center">
          Made with{' '}
          <HeartFilled style={{ color: 'red', verticalAlign: 'middle' }} />{' '}
          using React
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
