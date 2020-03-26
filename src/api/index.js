export const postAPI = (source, data) => {
	return fetch("/.netlify/functions/" + source, {
		method: "post",
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.catch(err => err);
};

export const getAPI = source => {
	return fetch("/.netlify/functions/" + source);
};
