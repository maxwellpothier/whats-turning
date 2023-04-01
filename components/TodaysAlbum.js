import styles from "./todaysAlbum.module.scss";

import Image from "next/image";
import {FaSpotify, FaItunes} from "react-icons/fa";
import {SiApplemusic} from "react-icons/si";
import WTButton from "../components/WTButton";
import {isAuthenticated} from "../utils/authUtils";

const TodaysAlbum = ({aotd, className}) => {
	return (
		<div className={`${styles.aotdContainer} ${className}`}>
			<div className={styles.aotd}>Album of the Day</div>
			<div className={styles.variableInformation}>
				{aotd.artUrl ? (
					<Image
						className={styles.aotdArt}
						priority
						height={"350"}
						width={"350"}
						src={aotd.artUrl}
						alt={aotd.title}
					/>
				) : (
					<div className={styles.imgPlaceholder}></div>
				)}
				<div className={styles.albumInfoContainer}>
					<span className={styles.artistName}>{aotd.artist}</span>
					<span className={styles.albumName}>{aotd.title}</span>
					<span className={styles.albumYear}>
						{aotd.yearReleased}
					</span>

					<div className={styles.streamLinks}>
						<a
							href={aotd.spotifyUrl}
							target={"_blank"}
							rel={"noreferrer"}
						>
							<FaSpotify className={styles.streamIcon} />
						</a>
						<a
							href={aotd.appleUrl}
							target={"_blank"}
							rel={"noreferrer"}
						>
							<SiApplemusic className={styles.streamIcon} />
						</a>
					</div>

					<WTButton
						content={"Create Post"}
						className={styles.createPostButton}
						onClick={() => {
							isAuthenticated()
								? (window.location.href = "/create-post")
								: (window.location.href = "/signup");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default TodaysAlbum;
