import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = `${process.env.BASE_API_URL}/post`;

export const getAllPosts = () => {
	return axios.get(baseUrl, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	});
};

export const getUserPosts = userId => {
	return axios.get(`${baseUrl}/${userId}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	});
};

export const getPost = postId => {
	return axios.get(`${baseUrl}/${postId}`);
};

export const createUserPost = (score, review, albumId) => {
	return axios.post(
		`${baseUrl}/create`,
		{
			rating: score,
			content: review,
			albumId: albumId,
		},
		{
			headers: {
				Authorization: `Bearer ${Cookies.get("WT_ACCESS_TOKEN")}`,
			},
		}
	);
};
