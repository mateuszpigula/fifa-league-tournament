import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getAPI } from "api";
import { Container, Ranking, AddResult, PlayerMatches } from "shared";
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
				<Switch>
					<Route path={`/:playerId`}>
						<PlayerMatches />
					</Route>
					<Route path="/">
						<AddResult players={players} />
						<Ranking players={players} />
					</Route>
				</Switch>
				{/* <AddPlayer /> */}
				{/* <Row>
					<Col>
					
					</Col>
				</Row> */}
			</Container>
		</Router>
	);
};

export default App;
