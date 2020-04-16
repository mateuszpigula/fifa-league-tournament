import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getAPI } from "api";
import { LoginContextProvider } from "contexts";
import { Container, Ranking, AddResult, PlayerMatches, LoginForm } from "shared";
import { Header } from "./components/Header/Header";
import "./App.css";

const App = () => {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		getAPI("playerRead")
			.then((res) => res.json())
			.then((res) => {
				console.log("App -> res", res);
				setPlayers(res.data);
			});
	}, []);

	return (
		<Router>
			<LoginContextProvider>
				<Container className="App mt-2">
					<Header />
					<Switch>
						<Route path="/add-result">
							<AddResult players={players} />
						</Route>
						<Route path="/login">
							<LoginForm />
						</Route>
						<Route path="/:playerId">
							<PlayerMatches players={players} />
						</Route>
						<Route path="/">
							<Ranking players={players} />
						</Route>
					</Switch>
				</Container>
			</LoginContextProvider>
		</Router>
	);
};

export default App;
