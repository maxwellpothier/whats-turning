import styles from "./todaysAlbum.module.scss";

const TodaysAlbum = () => {
	return (
		<div className={styles.container}>
			<span className={styles.todaysAlbumHeader}>Today&apos;s Album</span>
		</div>
	);
};

export default TodaysAlbum;