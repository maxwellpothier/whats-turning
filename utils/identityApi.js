import axios from "axios";

export const login = (username, password) => {
	const config = {
		username,
		password
	};

	return axios.post("https://wt-backend.onrender.com/identity/establish", config);
};