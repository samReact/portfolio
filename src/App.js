import NavBar from './components/NavBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/portfolio">
      <NavBar />
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
    </Router>
  );
}

export default App;