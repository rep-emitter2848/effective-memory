import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create.js';
import BlogList from './BlogList.js';
import NotFound from './NotFound.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails.js';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/new"><Create/></Route>
            <Route path="/log/:id" ><BlogDetails/></Route>
            <Route path="*"><NotFound/></Route>
          </Switch>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
