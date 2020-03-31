import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { postAPI } from "api";

export const AddPlayer = () => {
	const [player, setPlayer] = useState({
		name: "",
		psn: "",
		club: {
			name: "",
			logo: "",
		},
		stats: {
			points: 0,
			matches_count: 0,
		},
	});

	const handleCreate = () => {
		console.log("handleCreate -> player", player);

		postAPI("playerCreate", player)
			.then(response => {
				console.log("handleCreate -> response", response);
			})
			.catch(err => console.log("Product.create API error: ", err));
	};

	const handleChange = e => {
		const { name, value } = e.target;
		const keys = name.split(".");
		if (keys.length > 1) {
			setPlayer(prevState => {
				prevState[keys[0]][keys[1]] = value;
				return prevState;
			});
		} else {
			setPlayer(prevState => ({ ...prevState, [name]: value }));
		}
	};

	return (
		<Form>
			<Form.Label>Imię i nazwisko:</Form.Label>
			<Form.Control name="name" type="text" onChange={handleChange} />
			<Form.Label>Psn:</Form.Label>
			<Form.Control name="psn" type="text" onChange={handleChange} />
			<Form.Label>Klub:</Form.Label>
			<Form.Control name="club.name" type="text" onChange={handleChange} />
			<Form.Label>Logo:</Form.Label>
			<Form.Control name="club.logo" type="text" onChange={handleChange} />
			<Button variant="primary" onClick={handleCreate}>
				Dodaj gracza
			</Button>
		</Form>
	);
};
