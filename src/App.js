import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPlayer from "./AddPlayer/AddPlayer";
import Ranking from "./Ranking/Ranking";
import { Container, Row, Col } from "shared";

const App = () => {
	return (
		<Container className="App">
			<Row>
				<Col>
					<Ranking />
					{/* <AddPlayer /> */}
				</Col>
			</Row>
		</Container>
	);
};

export default App;
