import Image from "next/image";
import Container from "./theme/Container";
import styles from "./todaysAlbum.module.scss";

const fakeData = {
	title: "Halcyon Digest",
	artist: "Deerhunter",
	yearReleased: "2010",
	url: "https://i.discogs.com/gzj7yVP4-r1RTGur7Fqf3v-JgT9UEc1F7OmuhSRLV_E/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwNDY5/MS0xNDg0NTcwODYy/LTgyNDQuanBlZw.jpeg",
};

const TodaysAlbum = () => {
	return (
		<div className={styles.aotdContainer}>
			<Image
				className={styles.aotdArt}
				height={"600"}
				width={"600"}
				src={fakeData.url}
				alt={fakeData.title}
			/>
		</div>
	);
};

export default TodaysAlbum;