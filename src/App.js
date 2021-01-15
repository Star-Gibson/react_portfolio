import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Project from "./components/pages/Project/Project"
import About from "./components/pages/About/About"
import Contact from "./components/pages/Contact/Contact"
import './App.css';


function App() {
  return (
   <Router>
    <div className="App">
<Route exact path="/" component={About} />
<Route exact path="/portfolio" component={Project} />
<Route exact path="/contact" component={Contact} />
    </div>
   </Router>
  );
}

export default App;
