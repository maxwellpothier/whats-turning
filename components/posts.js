import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getAllPosts = async () => {
		const {data} = await axios.get("https://wt-backend.onrender.com/api/posts", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("WT_ACCESS_TOKEN")}`,
			},
		});
		const gotPosts = data.data;
		setPosts(gotPosts)
	};

	return (
		<div>
			<span>Posts</span>
			<button onClick={() => getAllPosts()}>Get Posts</button>
			<div>
				{posts.map((post, i) => (
					<div key={i}>{post.album.title}{i}</div>
				))}
			</div>
		</div>
	);
};

export default Posts;