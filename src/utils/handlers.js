export const handleChange = (e, setter) => {
	const { name, value } = e.target;
	const keys = name.split(".");
	if (keys.length > 2) {
		throw Error("Error. Too many keys");
	}

	if (keys.length === 2) {
		setter(prevState => {
			prevState[keys[0]][keys[1]] = value;
			return prevState;
		});
	} else {
		setter(prevState => ({ ...prevState, [name]: value }));
	}
};
