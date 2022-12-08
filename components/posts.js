import axios from "axios";
import Post from "./Post";
import { useEffect, useState } from "react";
import {getAllPosts} from "../utils/endpoints/postApi";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		const {data} = await getAllPosts();
		setPosts(data.data);
	};
	
	return (
		<Container>
			<SectionTitle>Posts</SectionTitle>
			<div>
				{posts.map((post, i) => (
					<Post
						key={i}
						post={post}
					/>
				))}
			</div>
		</Container>
	);
};

export default Posts;