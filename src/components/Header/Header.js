import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from "shared";
import { LoginContext } from "contexts";

export const Header = () => {
	const [isLoggedIn] = useContext(LoginContext);
	return (
		<div className="mb-3">
			<Button as={Link} to="/" className="mr-3">
				Home
			</Button>
			<Button as={Link} to="/schedule" className="mr-3">
				Terminarz
			</Button>
			{isLoggedIn && (
				<Button as={Link} to="/add-result">
					Add Result
				</Button>
			)}
		</div>
	);
};
