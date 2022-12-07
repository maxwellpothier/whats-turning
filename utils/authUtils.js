import { login } from "./endpoints/identityApi";

export const authenticateExistingUser = async (username, password) => {
	const {data} = await login("max", "asdfasdf");

	localStorage.setItem("WT_ACCESS_TOKEN", data.token);
};

