import styles from "./postCard.module.scss";

import Image from "next/image";
import ScoreIcon from "./ScoreIcon";
import {HiArrowLongRight} from "react-icons/hi2";

const album = {
	title: "The Powers That B",
	artist: "Death Grips",
	yearReleased: "2015",
	url: "https://i.discogs.com/5SKv2gtuye-VkCP4S7kfq1oyDw1T4X-nHZ8oFunUYto/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwNzc4/OTMtMTQ0MDcwMjYz/Ny05NTA2LmpwZWc.jpeg",
};

const PostCard = () => {
	return (
		<div className={styles.postCardContainer}>
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
			<div className={styles.contentPreview}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</div>
			<div className={styles.readMoreButton}>
				<span>Read More</span>
				<HiArrowLongRight/>
			</div>
		</div>
	);
};

export default PostCard;