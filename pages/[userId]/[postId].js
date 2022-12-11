import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostPage = () => {
	const router = useRouter();
	const [postId, setPostId] = useState("");
	const [userId, setUserId] = useState("");

	useEffect(() => {
		setPostId(router.query.postId);
		setUserId(router.query.userId);
	}, [router]);

	return (
		<div>
			Post Page Here!
			{postId}
			Belongs to {userId}
		</div>
	);
};

export default PostPage;