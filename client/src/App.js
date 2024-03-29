import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Register from './components/Register';
import AllServicesPage from './components/Allservice';
// import SignUp from "./components/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Electrician from './components/services/electrician';
import Acrepair from './components/services/acrepair';
import Carpenter from './components/services/carpenter';
import UserData from './components/details';
import AdminPage from './components/admin'; // Import the AdminPage component

// Import the components you want to include
function App() {
  return (
    <Router>
      <Switch>
      <Route path='/home/details'>
          <UserData />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/services/electrical'>
          <Electrician />
        </Route>
        <Route path='/services/Acrepair'>
          <Acrepair />
        </Route>
        <Route path='/services/carpentry'>
          <Carpenter />
        </Route>
        <Route path='/services'>
          <AllServicesPage />
        </Route>
        
        <Route path='/admin'>
          <AdminPage />
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
