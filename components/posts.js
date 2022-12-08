import axios from "axios";
import { useEffect, useState } from "react";
import {getAllPosts} from "../utils/endpoints/postApi";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const {data} = await getAllPosts();
		setPosts(data.data);
	};

	return (
		<div>
			<span>Posts</span>
			<button onClick={() => getPosts()}>Get Posts</button>
			<div>
				{posts.map((post, i) => (
					<div key={i}>{post.album.title}{i}</div>
				))}
			</div>
		</div>
	);
};

export default Posts;