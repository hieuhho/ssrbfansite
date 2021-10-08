import React from "react";
import "./App.css";
import "./normalize.css";
import Navbar from "./components/navbar/Navbar";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Anniversary from "./pages/Anniversary";
import Birthday from "./pages/Birthday";
import PageNotFound from "./pages/PageNotFound";
import UnderConstruction from "./pages/UnderConstruction";

// import Fanarts from "./pages/Fanarts";
import Taiwan from "./pages/Taiwan";
import FanMessages from "./pages/FanMessages";
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
				<Route
					exact
					path="/shishirun"
					component={() => {
						window.open("https://rachelbanana.itch.io/shishirun", "_blank");
						window.location = "/projects";
						return null;
					}}
				/>
				<Route exact path="/videos" component={Videos} />
				<Route exact path="/fanarts" component={UnderConstruction} />
				<Route exact path="/about" component={About} />

				<Route exact path="/ssrb_maker" component={Anniversary} />
				<Route exact path="/ssrb_world" component={Birthday} />
				<Route exact path="/taiwan_projects" component={Taiwan} />
				<Route exact path="/ssrb_sings" component={UnderConstruction} />
				<Route exact path="/fan_letters" component={FanMessages} />
				<Route
					exact
					path="/texture_pack"
					component={() => {
						window.open(
							"https://www.thefeatherstudio.com/mcrp_holo5th_anniversity.html?locale=en",
							"_blank"
						);
						window.location = "/taiwan_projects";
						return null;
					}}
				/>
				<Route
					exact
					path="/bustan"
					component={() => {
						window.open(
							"https://twitter.com/hashtag/%E3%81%97%E3%81%97%E3%82%8D%E3%82%93%E7%99%BE%E4%B8%87%E6%B5%B7%E5%A4%96%E8%A8%98%E5%BF%B5?src=hashtag_click",
							"_blank"
						);
						window.location = "/taiwan_projects";
						return null;
					}}
				/>
				<Route path="*" component={PageNotFound} />

				{/* implement later
				<Route path="/activity" component={Activity} />
				<Route path="/milestone" component={Milestone} />
				<Route path="/daipan" component={English} /> */}
			</Switch>
		</Router>
	);
}

export default App;
