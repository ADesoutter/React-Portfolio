import '../styles/App.css';
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProjectDetails from './ProjectDetails';
// import axios from 'axios';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects/:id">
                <ProjectDetails />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
