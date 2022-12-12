import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPost } from "../../utils/endpoints/postApi";

const PostPage = () => {
	const router = useRouter();
	const [post, setPost] = useState({});

	const getPagePost = async () => {
		const {data} = await getPost(router.query.userId, router.query.postId);
		setPost(data.data);
	}

	useEffect(() => {
		if (post?.id) return;
		getPagePost();
	});

	return (
		<div>
			Post Page Here!
			{post?.album?.title}
			<Link href={`/${post.belongsToId}`}>{post?.belongsToId}</Link>
			{post?.content}
		</div>
	);
};

export default PostPage;