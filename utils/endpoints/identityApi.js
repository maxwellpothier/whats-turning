import axios from "axios";

const baseUrl = "https://wt-backend.onrender.com/identity";

export const login = (formData) => {
	const config = formData;

	return axios.post(`${baseUrl}/establish`, config);
};