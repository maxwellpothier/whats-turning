import {useEffect, useState} from "react";
import {getUser, isAuthenticated} from "../utils/authUtils";
import HorizontalLine from "../components/theme/HorizontalLine";
import PostCard from "../components/post/PostCard";
import Theme from "../components/theme/Theme";
import Container from "../components/theme/Container";
import LoadMaster from "../components/theme/LoadMaster";
import {useRouter} from "next/router";
import Head from "next/head";

import styles from "./profile.module.scss";

const Profile = () => {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			if (!isAuthenticated()) {
				await router.push("/");
				return;
			}

			const data = await getUser();
			setUsername(data.username);
			setName(`${data.firstName} ${data.lastName}`);
			setPosts(data.posts);
			setIsLoading(false);
		})();
	}, [router]);

	return (
		<Theme>
			<Head>
				<title>Profile / What&apos;s Turning?</title>
				<meta property="og:title" content="Profile / What's Turning?" />
				<meta
					property="og:description"
					content="Profile page for What's Turning?"
				/>
				<meta property="og:image" content="/favicon.ico" />
				<meta
					property="og:url"
					content="https://www.whatsturning.com/profile"
				/>
			</Head>
			<LoadMaster isLoading={isLoading} className={styles.loadContainer}>
				<div className={styles.profileSubheading}>
					<div className={styles.subheadingNameSection}>
						<h3 className={styles.subheadingLargerFontSize}>
							{name}
						</h3>
						<h4>@{username}</h4>
						<a
							className={styles.editLink}
							href={"/profile/settings"}
						>
							Edit Profile
						</a>
					</div>
					<div className={styles.subheadingTotalPosts}>
						<h3 className={styles.subheadingLargerFontSize}>
							{posts ? posts.length : "0"}
						</h3>
						<h4>Total Posts</h4>
					</div>
				</div>
				<HorizontalLine />
				<Container>
					{posts ? (
						<>
							<h2 className={styles.postsSectionTitle}>
								{!isLoading &&
									(posts.length ? (
										<>All Posts</>
									) : (
										<>No Posts Yet!</>
									))}
							</h2>
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
					) : (
						<h2 className={styles.postsSectionTitle}>
							No posts yet
						</h2>
					)}
				</Container>
			</LoadMaster>
		</Theme>
	);
};

export default Profile;
