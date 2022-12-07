import axios from "axios";

const baseUrl = "https://wt-backend.onrender.com/api/";

export default getAllPosts = () => {
	return axios.get(`${baseUrl}/posts`);
}