import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import { Switch, Route, useLocation } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocalStorage } from './hooks/useLocalStorage.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  let location = useLocation();
  const { pathname } = location;

  const loadingEffect = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    setLoading(true);
    loadingEffect();
  }, [pathname]);

  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      return body.classList.add('-light');
    }
    body.classList.remove('-light');
  }, [theme]);

  return (
    <>
      <NavBar pathname={pathname} theme={theme} setTheme={setTheme} />
      {loading ? (
        <div
          style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner animation="grow" size="xl" variant="primary" />
        </div>
      ) : (
        <Switch>
          <Route exact path="/">
            <Home theme={theme} />
          </Route>
          <Route exact path="/about">
            <About theme={theme} />
          </Route>
          <Route path="/works">
            <Portfolio theme={theme} />
          </Route>
          <Route path="/contact">
            <Contact theme={theme} />
          </Route>
        </Switch>
      )}
      <Footer theme={theme} />
    </>
  );
}

export default App;
