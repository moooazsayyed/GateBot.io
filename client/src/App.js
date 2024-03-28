import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Register from './components/Register';
// import ServicesElectrician from './components/ServicesElectrician';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
        {/* <Route path='/services/electrician'>
          <ServicesElectrician  />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
