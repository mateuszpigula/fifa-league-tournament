import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getAPI } from "api";
import { AddPlayer, Container, Ranking, AddResult, PlayerMatches, Button } from "shared";
import "./App.css";

const App = () => {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		getAPI("playerRead")
			.then(res => res.json())
			.then(res => {
				setPlayers(res.data);
			});
	}, []);

	return (
		<Router>
			<Container className="App mt-2">
				<Button as={Link} to="/" className="mr-3">
					Home
				</Button>
				<Button as={Link} to="/add-result-admin">
					Add Result
				</Button>
				<Switch>
					<Route path="/add-result-admin">
						<AddResult players={players} />
					</Route>
					<Route path="/:playerId">
						<PlayerMatches />
					</Route>
					<Route path="/">
						<Ranking players={players} />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
