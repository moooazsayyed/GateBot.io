import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Register from './components/Register';
import AllServicesPage from './components/Allservice';
import GetStarted from './components/getStarted/GetStarted';
import Homes from './components/Homes/Homes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Electrician from './components/electrician';

// Import the components you want to include
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/services/electrical'>
          <Electrician />
        </Route>
        <Route path='/services'>
          <AllServicesPage />
        </Route>

        <Route path='/getstarted'>
          <GetStarted />
        </Route>

        <Route path='/homes'>
          <Homes />
        </Route>


        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Main />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
