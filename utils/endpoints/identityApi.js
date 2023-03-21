import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = `${process.env.BASE_API_URL}/identity`;

export const login = (formData) => {
	const config = formData;

	return axios.post(`${baseUrl}/login`, config);
};

export const signup = (formData) => {
	const config = formData;

	return axios.post(`${baseUrl}/create`, config);
};

export const getLoggedInUser = () => {
	return axios.get(`${baseUrl}/`, {
		headers: {
			Authorization: `Bearer ${Cookies.get("WT_ACCESS_TOKEN")}`,
		},
	});
};
