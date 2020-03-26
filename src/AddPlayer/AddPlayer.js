import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { postAPI } from "../api";

const AddPlayer = () => {
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

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		fetch("/.netlify/functions/productRead")
	// 			.then(res => res.json())
	// 			.then(response => {
	// 				console.log("CONSOLE LOG @@@@@@@: Ranking -> response", response);
	// 				console.log(response.msg);
	// 				const newInputs = [];
	// 				const newProducts = response.data;

	// 				newProducts.forEach(product => {
	// 					const productProps = this.setProductProps(product);
	// 					newInputs.push(productProps);
	// 				});

	// 				setInputs(newInputs);
	// 				setProducts(newProducts);

	// 				console.log("Ranking -> newInputs", newInputs);
	// 				console.log("Ranking -> newProducts", newProducts);
	// 			})
	// 			.catch(err => console.log("Error retrieving products: ", err));
	// 	};

	// 	fetchData();
	// }, []);

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
				Dodaj produkt
			</Button>
		</Form>
	);
};

export default AddPlayer;
