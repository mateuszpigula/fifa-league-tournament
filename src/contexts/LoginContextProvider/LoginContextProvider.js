import React, { useState, useEffect, createContext } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = props => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		setIsLoggedIn(document.cookie.includes("LOGGED_IN"));
	}, [isLoggedIn]);
	return <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>{props.children}</LoginContext.Provider>;
};
