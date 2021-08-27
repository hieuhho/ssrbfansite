import React from "react"
import "./App.css";
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity"
import Videos from "./pages/Videos"
import Projects from "./pages/Projects"
import Anniversary from "./pages/Anniversary"
import Birthday from "./pages/Birthday"
import Milestone from "./pages/Milestone"
import Taiwan from "./pages/Taiwan"
import English from "./pages/English"
import Fanarts from "./pages/Fanarts"
import About from "./pages/About"


function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/activity" component={Activity} />
          <Route path="/videos" component={Videos} />
          <Route path="/projects" component={Projects} />
          <Route path="/anniversary" component={Anniversary} />
          <Route path="/birthday" component={Birthday} />
          <Route path="/milestone" component={Milestone} />
          <Route path="/taiwan" component={Taiwan} />
          <Route path="/daipan" component={English} />
          <Route path="/fanarts" component={Fanarts} />
          <Route path="/about" component={About} />
        </Switch>
    </Router>
  );
}

export default App;
