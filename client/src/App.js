import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Register from './components/Register';
import AllServicesPage from './components/Allservice';
import GetStarted from './components/getStarted/GetStarted';
import Properties from './components/properties/Properties';
import Community from './components/community/Community';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
import Notices from './components/Notices';
import PostNotice from './components/postnotice';
// Import the components you want to include
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Notices'>
          <Notices />
        </Route>
        <Route path='/Notice'>
          <PostNotice />
        </Route>
        <Route path='/details'>
          <UserData />
        </Route>

        <Route path='/admin'>
          <AdminPage />
        </Route>
        <Route path='/home'>
          <Navbar />
          <Home />
          <Footer />
        </Route>

        <Route path='/services/electrical'>
          <Electrician />
        </Route>
        <Route path='/services/Acrepair'>
          <Acrepair />
        </Route>
        <Route path='/services/carpenter'>
          <Carpenter />
        </Route>

        <Route path='/services'>
          <Navbar />
          <AllServicesPage />
          <Footer />
        </Route>

        <Route path='/getstarted'>
          <Main />
        </Route>

        <Route path='/properties'>
          <Navbar />
          <Properties />
          <Footer />
        </Route>

        <Route path='/community'>
          <Navbar />
          <Community />
          <Footer />
        </Route>


        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/'>
          <GetStarted />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
