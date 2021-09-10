import NavBar from './components/NavBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { Switch, Route, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

function App() {
  const [loading, setLoading] = useState(true);
  let location = useLocation();
  const { pathname } = location;

  const loadingEffect = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    setLoading(true);
    loadingEffect();
  }, [pathname]);

  return (
    <>
      <NavBar pathname={pathname} />
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
            <Home />
          </Route>
          <Route path="/works">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
