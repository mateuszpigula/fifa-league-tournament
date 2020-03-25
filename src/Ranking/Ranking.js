import React, { useState, useEffect } from "react";

const Ranking = () => {
	const [inputs, setInputs] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			fetch("/.netlify/functions/productRead")
				.then(res => res.json())
				.then(response => {
					console.log("CONSOLE LOG @@@@@@@: Ranking -> response", response);
					console.log(response.msg);
					const newInputs = [];
					const newProducts = response.data;

					newProducts.forEach(product => {
						const productProps = this.setProductProps(product);
						newInputs.push(productProps);
					});

					setInputs(newInputs);
					setProducts(newProducts);

					console.log("Ranking -> newInputs", newInputs);
					console.log("Ranking -> newProducts", newProducts);
				})
				.catch(err => console.log("Error retrieving products: ", err));
		};

		fetchData();
	}, []);

	const postAPI = (source, data) => {
		return fetch("/.netlify/functions/" + source, {
			method: "post",
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.catch(err => err);
	};

	const handleCreate = () => {
		const newProduct = {
			name: "New WAshmachine",
			price: 999,
		};

		postAPI("productCreate", newProduct)
			.then(response => {
				console.log("handleCreate -> response", response);
			})
			.catch(err => console.log("Product.create API error: ", err));
	};

	return (
		<div>
			<button onClick={handleCreate}>Dodaj produkt</button>
		</div>
	);
};

export default Ranking;
