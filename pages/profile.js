import { useEffect, useState } from "react";
import { getUser } from "../utils/authUtils";
import HorizontalLine from "../components/theme/HorizontalLine";
import PostCard from "../components/post/PostCard";
import Theme from "../components/theme/Theme";
import Container from "../components/theme/Container";

import styles from "./profile.module.scss";

const Profile = () => {
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getUser();
				setUsername(data.username);
				setName(`${data.firstName} ${data.lastName}`);
				setPosts(data.posts);
			} catch (err) {
				toastError(err?.response?.data?.message);
			}
		})();
	}, []);

	return (
		<Theme>
			<div className={styles.profileSubheading}>
				<div className={styles.subheadingNameSection}>
					<h4>@{username}</h4>
					<h3 className={styles.subheadingLargerFontSize}>{name}</h3>
				</div>
				<div className={styles.subheadingTotalPosts}>
					<h3 className={styles.subheadingLargerFontSize}>
						{posts ? posts.length : "0"}
						</h3>
					<h4>Total Posts</h4>
				</div>
			</div>
			<HorizontalLine/>
			<Container>
				{posts
					? <>
						<h2 className={styles.postsSectionTitle}>All Posts</h2>
						<div className={styles.postContainer}>
							{posts?.map((post, i) => (
								<PostCard
									key={i}
									className={styles.profilePostCard}
									post={post}
								/>
							))}
						</div>
					</>
					: <h2 className={styles.postsSectionTitle}>No posts yet</h2>
				}
			</Container>
		</Theme>
	);
};

export default Profile;