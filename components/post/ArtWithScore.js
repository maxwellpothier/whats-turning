import Image from "next/image";
import ScoreIcon from "./ScoreIcon";

import styles from "./artWithScore.module.scss";

const ArtWithScore = ({album, rating}) => {
	return (
		<div className={styles.linkContainer}>
			<Image
				priority
				src={album.artUrl}
				alt={album.title}
				width={100}
				height={100}
				className={styles.albumArt}
			/>
			<ScoreIcon score={rating} className={styles.score} />
		</div>
	);
};

export default ArtWithScore;
