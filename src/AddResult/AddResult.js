import React, { useState } from "react";
import { Button, Form, Col } from "shared";
import { handleChange as handleInputChange } from "utils/handlers";
import styles from "./AddResult.module.scss";

export const AddResult = () => {
	const [show, setShow] = useState(false);
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
		//send request
		// handleClose();
		// window.location.reload(true);
	};

	const handleChange = e => {
		handleInputChange(e, setResult);
		console.log(result);
	};

	return (
		<>
			<Button onClick={toggleShow}>Dodaj wynik</Button>

			{show && (
				<Form className={styles.form}>
					<Form.Row>
						<Col>
							<Form.Label>Gracz 1:</Form.Label>
							<Form.Control name="player1" type="text" onChange={handleChange} />
						</Col>
						<Col>
							<Form.Label>Gracz 2:</Form.Label>
							<Form.Control name="player2" type="text" onChange={handleChange} />
						</Col>
					</Form.Row>

					<Button variant="primary" onClick={toggleShow}>
						Anuluj
					</Button>
					<Button variant="primary" onClick={handleAddResult}>
						Dodaj produkt
					</Button>
				</Form>
			)}
		</>
	);
};
