import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Nav from './components/Nav';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  console.log('app rendered');
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <Router>
        <Nav />

        <Switch>     
          <Route path="/about">
            <About myProp="something" />
          </Route>

          <Route path="/products" component={Products} />

          <Route path="/secret">
            <h2>You have found the secret page</h2>
          </Route>

          <Route path="/" component={Home} />
        </Switch>

      </Router>
    </div>
  );
};

export default App;
