import React, { useState, useContext } from "react";
import Select from "react-select";

import { postAPI } from "api";
import { Button, Form, Col } from "shared";
import { handleChange as handleInputChange } from "utils/handlers";
import { LoginContext } from "contexts";

import styles from "./AddResult.module.scss";

const properScore = (score) => score >= 0;
const isProperResult = (result) => {
	const { player1, player2, match1, match2 } = result;
	return !!(
		player1 &&
		player2 &&
		properScore(match1.home) &&
		properScore(match1.away) &&
		properScore(match2.home) &&
		properScore(match2.away)
	);
};

export const AddResult = ({ players }) => {
	const [isLoggedIn] = useContext(LoginContext);
	const [textStream, setTextStream] = useState("");
	const [result, setResult] = useState({
		player1: "",
		player2: "",
		match1: {
			home: null,
			away: null,
		},
		match2: {
			home: null,
			away: null,
		},
	});

	const handleAddResult = () => {
		const getTextStreamElems = () => {
			if (textStream) {
				const arrayOfMatches = textStream.split("\n");
				return arrayOfMatches
					.map((match) => {
						const elems = match.split(" ");

						if (elems.length < 8) {
							return null;
						}

						const player1 = elems.slice(0, 2).join(" ");
						const player2 = elems.slice(3, 5).join(" ");
						const match1 = elems.slice(5, 6)[0].split(":");
						const match2 = elems.slice(7, 8)[0].split(":");

						const p1 = players.find((pl) => pl.name === player1);
						const p2 = players.find((pl) => pl.name === player2);
						if (!p1) {
							console.log("Player not found", player1);
							return null;
						}
						if (!p2) {
							console.log("Player not found", player2);
							return null;
						}

						const player1_psn = p1.psn;
						const player2_psn = p2.psn;

						const body = {
							player1: player1_psn,
							player2: player2_psn,
							match1: {
								home: +match1[0],
								away: +match1[1],
							},
							match2: {
								home: +match2[0],
								away: +match2[1],
							},
						};

						return body;
					})
					.filter((match) => match !== null);
			}
		};
		const matches = getTextStreamElems();
		if (matches.length > 0) {
			matches.forEach((match) => {
				if (!isProperResult(match)) {
					console.log("data not complete");
				}

				// send request
				postAPI("sendResult", match)
					.then((res) => {
						console.log("handleAddResult -> res", res);
					})
					.catch((err) => console.log("Product.create API error: ", err));
			});
		}
	};

	const handleChange = (e) => {
		handleInputChange(e, setResult);
	};

	const handleTextStreamChange = (e) => {
		setTextStream(e.target.value);
	};

	const handlePlayerChange = (val, e) => {
		setResult((prevState) => ({ ...prevState, [e.name]: val.value }));
	};
	const options = players.map((player) => ({
		value: player.psn,
		label: player.name,
	}));

	if (!isLoggedIn) {
		return <h1>Nie jesteś zalogowany!</h1>;
	}

	return (
		<>
			<Form className={styles.form}>
				<Form.Group>
					<Form.Row>
						<Col>
							<Form.Label>Gracz 1:</Form.Label>
							<Select
								name="player1"
								options={options.filter((p) => p.value !== result.player2)}
								onChange={handlePlayerChange}
							/>
						</Col>
						<Col>
							<Form.Label>Gracz 2:</Form.Label>
							<Select
								name="player2"
								options={options.filter((p) => p.value !== result.player1)}
								onChange={handlePlayerChange}
							/>
						</Col>
					</Form.Row>
				</Form.Group>

				<Form.Group>
					<Form.Row className={styles["form-row"]}>
						<Col md="auto">Mecz 1:</Col>
						<Col xs lg="auto">
							<Form.Label>{result.player1}</Form.Label>
							<Form.Control name="match1.home" type="number" onChange={handleChange} />
						</Col>
						<span>-</span>
						<Col xs lg="auto">
							<Form.Label>{result.player2}</Form.Label>
							<Form.Control name="match1.away" type="number" onChange={handleChange} />
						</Col>
					</Form.Row>
				</Form.Group>

				<Form.Group>
					<Form.Row className={styles["form-row"]}>
						<Col md="auto">Rewanż:</Col>
						<Col xs lg="auto">
							<Form.Label>{result.player1}</Form.Label>
							<Form.Control name="match2.home" type="number" onChange={handleChange} />
						</Col>
						<span>-</span>
						<Col xs lg="auto">
							<Form.Label>{result.player2}</Form.Label>
							<Form.Control name="match2.away" type="number" onChange={handleChange} />
						</Col>
					</Form.Row>
				</Form.Group>

				<Form.Group>
					<Form.Row className={styles["form-row"]}>
						<Col md="auto">Wynik tekstowy:</Col>
						<Col xs="9">
							<Form.Control as="textarea" rows="3" name="textStream" onChange={handleTextStreamChange} />
						</Col>
					</Form.Row>
				</Form.Group>

				<Form.Group>
					<Form.Row className={styles.buttons}>
						<Button variant="primary" onClick={handleAddResult}>
							Dodaj wyniki
						</Button>
					</Form.Row>
				</Form.Group>
			</Form>
			<ul>
				{players.map((player) => (
					<li style={{ color: "white" }} key={player.psn}>
						{player.psn} - {player.name}
					</li>
				))}
			</ul>
		</>
	);
};
