import styles from "./postCard.module.scss";

import Image from "next/image";
import ScoreIcon from "./ScoreIcon";
import {HiArrowLongRight} from "react-icons/hi2";

const PostCard = ({post, className}) => {
	const {artUrl, title, artist, yearReleased} = post.album;
	const {rating} = post;

	return (
		<div
			className={`${styles.postCardContainer} ${className}`}
			onClick={() => window.location.href = `/post/${post.id}`}
		>
			<div className={styles.cardHeadSection}>
				<div className={styles.albumInfo}>				
					<Image
						className={styles.postCardArt}
						height={"600"}
						width={"600"}
						src={artUrl}
						alt={title}
					/>
					<div className={styles.albumInfoText}>
						<span className={styles.albumTitle}>{title}</span>
						<span className={styles.albumArtist}>{artist}</span>
						<span className={styles.albumYear}>{yearReleased}</span>
					</div>
				</div>
				<ScoreIcon score={rating}/>
			</div>

			<div className={styles.blocksWrapper}>
				<div className={`${styles.contentPreview} ${styles.smallerWidth}`}/>
				<div className={styles.contentPreview}/>
				<div className={`${styles.contentPreview} ${styles.smallestWidth}`}/>
			</div>

			<div className={styles.readMoreButton}>
				<span>Read More</span>
				<HiArrowLongRight/>
			</div>
		</div>
	);
};

export default PostCard;