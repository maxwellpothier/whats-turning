import styles from "./todaysAlbum.module.scss";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getAotd } from "../utils/albumUtils";
import { FaSpotify, FaItunes } from "react-icons/fa";
import {SiApplemusic} from "react-icons/si";
import WTButton from "../components/WTButton";
import { isAuthenticated } from "../utils/authUtils";
import WTLoader from "./theme/WTLoader";
import LoadMaster from "./theme/LoadMaster";

const TodaysAlbum = ({className}) => {
	const [aotd, setAotd] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const album = await getAotd();
			setAotd(album);
			setIsLoading(false);
		})();
	}, []);

	return (
		<div className={`${styles.aotdContainer} ${className}`}>
			<div className={styles.aotd}>Album of the Day</div>
			<LoadMaster isLoading={isLoading}>
				<div className={styles.variableInformation}>
					<Image
						className={styles.aotdArt}
						priority
						height={"350"}
						width={"350"}
						src={aotd.artUrl}
						alt={aotd.title}
					/>
					<div className={styles.albumInfoContainer}>
						<span className={styles.artistName}>{aotd.artist}</span>
						<span className={styles.albumName}>{aotd.title}</span>
						<span className={styles.albumYear}>{aotd.yearReleased}</span>

						<div className={styles.streamLinks}>
							<a href={aotd.spotifyUrl} target={"_blank"} rel={"noreferrer"}>
								<FaSpotify className={styles.streamIcon}/>
							</a>
							<a href={aotd.appleUrl} target={"_blank"} rel={"noreferrer"}>
								<SiApplemusic className={styles.streamIcon}/>
							</a>
						</div>

						<WTButton
							content={"Create Post"}
							className={styles.createPostButton}
							onClick={() => {
								isAuthenticated() ? window.location.href = "/create-post" :  window.location.href = "/signup";
							}}
						/>
					</div>
				</div>
			</LoadMaster>
		</div>
	);
};

export default TodaysAlbum;