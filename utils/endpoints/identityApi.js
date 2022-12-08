import axios from "axios";

const baseUrl = "https://wt-backend.onrender.com/identity";

export const login = (formData) => {
	const config = formData;

	return axios.post(`${baseUrl}/establish`, config);
};

export const signup = (formData) => {
	console.log(formData);
};

export const getLoggedInUser = () => {
	return axios.get(`${baseUrl}/`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	})
};