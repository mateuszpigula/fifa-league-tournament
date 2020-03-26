import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAPI } from "api";

import { Container, Row, Col, Ranking, AddResult } from "shared";
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
		<Container className="App mt-2">
			<Row>
				<Col>
					<AddResult players={players} />
					<Ranking players={players} />
					{/* <AddPlayer /> */}
				</Col>
			</Row>
		</Container>
	);
};

export default App;
