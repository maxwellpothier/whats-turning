import styles from "./postCard.module.scss";

import Image from "next/image";
import ScoreIcon from "./ScoreIcon";
import {HiArrowLongRight} from "react-icons/hi2";

const album = {
	title: "Physical Graffiti",
	artist: "Led Zeppelin",
	yearReleased: "1975",
	url: "https://i.discogs.com/x3ZpnVYVFbxLgfbyGkI5YJd8ySOeh9uUaHxOHr9uaZ4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1ODkz/OS0xNTg4ODgxMTUx/LTE5OTUuanBlZw.jpeg",
};

const PostCard = ({className}) => {
	return (
		<div className={`${styles.postCardContainer} ${className}`}>
			<div className={styles.cardHeadSection}>
				<div className={styles.albumInfo}>				
					<Image
						className={styles.postCardArt}
						height={"600"}
						width={"600"}
						src={album.url}
						alt={album.title}
					/>
					<div className={styles.albumInfoText}>
						<span className={styles.albumTitle}>{album.title}</span>
						<span className={styles.albumArtist}>{album.artist}</span>
						<span className={styles.albumYear}>{album.yearReleased}</span>
					</div>
				</div>
				<ScoreIcon score={8.3}/>
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