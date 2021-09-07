import React from "react";
import "./App.css";
import "./normalize.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos";
import Fanarts from "./pages/Fanarts";
import About from "./pages/About";
import Anniversary from "./pages/Anniversary";
import Birthday from "./pages/Birthday";
import Taiwan from "./pages/Taiwan";
// import Activity from "./pages/Activity";
// import Milestone from "./pages/Milestone";
// import English from "./pages/English";
// import Population from "./pages/Population"

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route exact path="/ssrbfansite">
          <Redirect to="/" />
        </Route>
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/videos" component={Videos} />
				<Route exact path="/fanarts" component={Fanarts} />
				<Route exact path="/about" component={About} />

				<Route exact path="/ssrb_maker" component={Anniversary} />
				<Route exact path="/ssrb_world" component={Birthday} />
				<Route exact path="/taiwan" component={Taiwan} />


				{/* implement later
				<Route path="/activity" component={Activity} />
				<Route path="/milestone" component={Milestone} />
				<Route path="/daipan" component={English} /> */}
			</Switch>
		</Router>
	);
}

export default App;
