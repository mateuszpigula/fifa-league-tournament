import React, { useState } from "react";
import Select from "react-select";

import { Button, Form, Col } from "shared";
import { handleChange as handleInputChange } from "utils/handlers";
import styles from "./AddResult.module.scss";

export const AddResult = ({ players }) => {
	const [show, setShow] = useState(true);
	const [result, setResult] = useState({
		player1: "",
		player2: "",
		match_1: {
			home: 0,
			away: 0,
		},
		match_2: {
			home: 0,
			away: 0,
		},
	});

	const toggleShow = () => setShow(prev => !prev);

	const handleAddResult = async () => {
		console.log("handleAddResult -> result", result);
		//send request
		// handleClose();
		// window.location.reload(true);
	};

	const handleChange = e => {
		handleInputChange(e, setResult);
	};

	const handlePlayerChange = (val, e) => {
		setResult(prevState => ({ ...prevState, [e.name]: val.value }));
	};
	const options = players.map(player => ({
		value: player.psn,
		label: player.psn,
	}));

	return (
		<>
			<Button onClick={toggleShow}>Dodaj wynik</Button>
			{show && (
				<Form className={styles.form}>
					<Form.Group>
						<Form.Row>
							<Col>
								<Form.Label>Gracz 1:</Form.Label>
								<Select
									name="player1"
									options={options.filter(p => p.value !== result.player2)}
									onChange={handlePlayerChange}
								/>
							</Col>
							<Col>
								<Form.Label>Gracz 2:</Form.Label>
								<Select
									name="player2"
									options={options.filter(p => p.value !== result.player1)}
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
								<Form.Control name="match_1.home" type="number" onChange={handleChange} />
							</Col>
							<span>-</span>
							<Col xs lg="auto">
								<Form.Label>{result.player2}</Form.Label>
								<Form.Control name="match_1.away" type="number" onChange={handleChange} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row className={styles["form-row"]}>
							<Col md="auto">Rewanż:</Col>
							<Col xs lg="auto">
								<Form.Label>{result.player1}</Form.Label>
								<Form.Control name="match_2.home" type="number" onChange={handleChange} />
							</Col>
							<span>-</span>
							<Col xs lg="auto">
								<Form.Label>{result.player2}</Form.Label>
								<Form.Control name="match_2.away" type="number" onChange={handleChange} />
							</Col>
						</Form.Row>
					</Form.Group>

					<Form.Group>
						<Form.Row className={styles.buttons}>
							<Button variant="primary" onClick={toggleShow}>
								Anuluj
							</Button>
							<Button variant="primary" onClick={handleAddResult}>
								Dodaj wyniki
							</Button>
						</Form.Row>
					</Form.Group>
				</Form>
			)}
		</>
	);
};
