import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Register from './components/Register';
import AllServicesPage from './components/Allservice';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Import the components you want to include
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
        <Route path='/services'>
          <AllServicesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
