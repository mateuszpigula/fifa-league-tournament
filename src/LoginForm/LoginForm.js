import React, { useState, useContext } from "react";
import { Button, Form, Col } from "shared";
import { postAPI } from "api";
import { LoginContext } from "contexts";

export const LoginForm = () => {
	const [, setIsLoggedIn] = useContext(LoginContext);
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;

		setCredentials(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSignIn = e => {
		e.preventDefault();

		postAPI("signIn", credentials)
			.then(() => {
				setIsLoggedIn(true);
			})
			.catch(err => console.log("User.signIn API error: ", err));
	};

	return (
		<Form onSubmit={handleSignIn}>
			<Form.Group>
				<Form.Row>
					<Form.Label>Username:</Form.Label>
					<Form.Control type="text" name="username" onChange={handleChange} value={credentials.username} />
				</Form.Row>
				<Form.Row>
					<Form.Label>Password:</Form.Label>
					<Form.Control type="password" name="password" onChange={handleChange} value={credentials.password} />
				</Form.Row>
			</Form.Group>
			<Col>
				<Button type="submit" onClick={handleSignIn}>
					Sign In
				</Button>
			</Col>
		</Form>
	);
};
