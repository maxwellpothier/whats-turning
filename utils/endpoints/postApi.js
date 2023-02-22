import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://wt-backend.onrender.com/api/posts";

export const getAllPosts = () => {
	return axios.get(baseUrl, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	});
};

export const getUserPosts = (userId) => {
	return axios.get(`${baseUrl}/${userId}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	})
};

export const getPost = (userId, postId) => {
	return axios.get(`${baseUrl}/${userId}/${postId}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	});
};

export const createUserPost = ({userId, score, review, albumId}) => {
	return axios.post(`${baseUrl}/${userId}`, {
		rating: +score,
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