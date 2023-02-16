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
			const data = await getUser();
			setUsername(data.username);
			setName(`${data.firstName} ${data.lastName}`);
			setPosts(data.posts);
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
					<h3 className={styles.subheadingLargerFontSize}>{posts.length}</h3>
					<h4>Total Posts</h4>
				</div>
			</div>
			<HorizontalLine/>
			<Container>
				<h2 className={styles.postsSectionTitle}>All Posts</h2>
				{posts.map((post, i) => (
					<PostCard
						key={i}
						className={styles.profilePostCard}
						title={"I Can Hear The Heart Beating As One"}
						artist={"Yo La Tengo"}
						yearReleased={"1997"}
						url={"https://i.discogs.com/x3ZpnVYVFbxLgfbyGkI5YJd8ySOeh9uUaHxOHr9uaZ4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1ODkz/OS0xNTg4ODgxMTUx/LTE5OTUuanBlZw.jpeg"}
					/>
				))}
			</Container>
		</Theme>
	);
};

export default Profile;