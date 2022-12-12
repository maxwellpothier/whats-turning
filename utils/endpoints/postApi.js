import axios from "axios";

const baseUrl = "https://wt-backend.onrender.com/api/";

export const getAllPosts = () => {
	return axios.get(`${baseUrl}/posts`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	});
};

export const getUserPosts = (userId) => {
	return axios.get(`${baseUrl}/posts/${userId}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	})
};

export const getPost = (userId, postId) => {
	return axios.get(`${baseUrl}/posts/${userId}/${postId}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
		},
	});
};