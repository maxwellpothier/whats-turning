import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPostForId } from "../../utils/postUtils";
import Theme from "../../components/theme/Theme";
import HorizontalLine from "../../components/theme/HorizontalLine";

import styles from "./postId.module.scss";
import Image from "next/image";
import ArtWithScore from "../../components/post/ArtWithScore";

const SinglePost = () => {
	const router = useRouter();
	const [post, setPost] = useState({});
	const [date, setDate] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!router.isReady) return;
		(async () => {
			const res = await getPostForId(router.query.postId);
			setPost(res);
			setDate(new Date(res.createdAt));
			setIsLoading(false);
		})();
	}, [router]);

	return (
		<Theme>
			{!isLoading &&
				<>
					<div className={styles.postPageHeader}>
						<div className={styles.nameDate}>
							<p className={styles.username}>@{post.belongsTo.username}</p>
							<p className={styles.date}>{`${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`}</p>
						</div>
						<div className={styles.albumInfo}>
							<ArtWithScore
								album={post.album}
								rating={post.rating}
							/>
							<div>
								<p className={styles.albumTitle}>{post.album.title}</p>
								<p className={styles.albumArtist}>{post.album.artist}</p>
								<p className={styles.albumYear}>{post.album.yearReleased}</p>
							</div>
						</div>
					</div>
					<HorizontalLine/>
					<div className={styles.contentContainer}>
						<p className={styles.content}>{post.content}</p>
					</div>
				</>
			}
		</Theme>
	);
};

export default SinglePost;