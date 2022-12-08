import Image from "next/image";
import styles from "./todaysAlbum.module.scss";

const fakeData = {
	title: "Halcyon Digest",
	artist: "Deerhunter",
	yearReleased: "2010",
	url: "https://upload.wikimedia.org/wikipedia/en/8/89/Halcyon_Digest_-_%28Front_Cover%29.png",
};

const TodaysAlbum = () => {
	return (
		<div className={styles.container}>
			<span className={styles.todaysAlbumHeader}>Today&apos;s Album</span>
			<div className={styles.albumCardContainer}>
				<div>
					<Image
						height={"180"}
						width={"198"}
						src={fakeData.url}
						alt={fakeData.title}
					/>
				</div>
				<div className={styles.albumInfo}>
					<div>{fakeData.title}</div>
					<div>{fakeData.artist}</div>
					<div>{fakeData.yearReleased}</div>
					<button>Create a Post</button>
				</div>
			</div>
		</div>
	);
};

export default TodaysAlbum;