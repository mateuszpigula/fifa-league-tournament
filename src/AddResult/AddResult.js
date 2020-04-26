import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { postAPI } from "api";
import { Button, Form, Col } from "shared";
import { LoginContext } from "contexts";

import styles from "./AddResult.module.scss";

const properScore = (score) => score >= 0;
const isProperResult = (result) => {
	const { player1, player2, home, away } = result;
	return !!(player1 && player2 && properScore(home) && properScore(away));
};

export const AddResult = ({ players }) => {
	const inputEl = useRef(null);
	const [isLoggedIn] = useContext(LoginContext);
	const [textStream, setTextStream] = useState("");

	const handleAddResult = () => {
		const getTextStreamElems = () => {
			if (textStream) {
				const arrayOfMatches = textStream.split("\n");
				return arrayOfMatches
					.map((match) => {
						const elems = match.split(" ");

						if (elems.length < 6) {
							return null;
						}

						const player1 = elems.slice(0, 2).join(" ");
						const player2 = elems.slice(3, 5).join(" ");
						const result = elems.slice(5, 6)[0].split(":");

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
							home: +result[0],
							away: +result[1],
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

	const handleTextStreamChange = (e) => {
		setTextStream(e.target.value);
	};

	const handleNameClick = (e) => {
		const lastFourChars = textStream.slice(-4);
		if (lastFourChars === "") {
			setTextStream(`${e.target.textContent} vs `);
		} else if (lastFourChars.includes("vs")) {
			setTextStream(`${textStream}${e.target.textContent} `);
		} else if (lastFourChars.includes(":")) {
			setTextStream(`${textStream}\n${e.target.textContent} vs `);
		}

		inputEl.current.focus();
	};

	if (!isLoggedIn) {
		return <h1>Nie jesteś zalogowany!</h1>;
	}

	return (
		<>
			<Form className={styles.form}>
				<Form.Group>
					<Form.Row className={styles["form-row"]}>
						<Col md="auto">Wynik tekstowy:</Col>
						<Col xs="9">
							<Form.Control
								as="textarea"
								rows="3"
								name="textStream"
								value={textStream}
								onChange={handleTextStreamChange}
								ref={inputEl}
							/>
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
						<Link to={`/${player.psn}`}>{player.psn}</Link>
						<span> - </span>
						<span className={styles.name} onClick={handleNameClick}>
							{player.name}
						</span>
					</li>
				))}
			</ul>
		</>
	);
};
