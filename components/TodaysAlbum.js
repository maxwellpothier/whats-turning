import styles from "./todaysAlbum.module.scss";

import Image from "next/image";
import { FaSpotify, FaItunes } from "react-icons/fa";
import {SiApplemusic} from "react-icons/si";
import WTButton from "../components/WTButton";

const fakeData = {
	title: "Turn on the Bright Lights",
	artist: "Interpol",
	yearReleased: "2001",
	url: "https://i.discogs.com/gzj7yVP4-r1RTGur7Fqf3v-JgT9UEc1F7OmuhSRLV_E/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwNDY5/MS0xNDg0NTcwODYy/LTgyNDQuanBlZw.jpeg",
};

const TodaysAlbum = () => {
	return (
		<div className={styles.aotdContainer}>
			<div className={styles.aotd}>Album of the Day</div>
			<div className={styles.variableInformation}>
				<Image
					className={styles.aotdArt}
					height={"600"}
					width={"600"}
					src={fakeData.url}
					alt={fakeData.title}
				/>
				<div className={styles.albumInfoContainer}>
					<span className={styles.artistName}>{fakeData.artist}</span>
					<span className={styles.albumName}>{fakeData.title}</span>
					<span className={styles.albumYear}>{fakeData.yearReleased}</span>

					<div className={styles.streamLinks}>
						<a href="https://open.spotify.com/user/bg8527p8wb1nrpb6r8xf662r2?si=a32cb6c1e3214d3a" target={"_blank"} rel={"noreferrer"}>
							<FaSpotify className={styles.streamIcon}/>
						</a>
						<a href="https://github.com/maxwellpothier/whats-turning/tree/main" target={"_blank"} rel={"noreferrer"}>
							<SiApplemusic className={styles.streamIcon}/>
						</a>
					</div>

					<WTButton content={"Create Post"} className={styles.createPostButton}/>
				</div>
			</div>
			<hr className={styles.bottomLine}/>
		</div>
	);
};

export default TodaysAlbum;