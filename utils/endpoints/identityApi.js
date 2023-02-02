import axios from "axios";

const baseUrl = "https://wt-backend.onrender.com/identity";

export const login = (formData) => {
	const config = formData;

	return axios.post(`${baseUrl}/establish`, config);
};

export const signup = (formData) => {
	const config = formData;
	return console.log(config);
};

export const getLoggedInUser = () => {
	return axios.get(`${baseUrl}/`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	});
};

export const getUser = (userId) => {
	return axios.get(`${baseUrl}/${userId}`);
};