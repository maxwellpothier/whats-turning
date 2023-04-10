import styles from "./whatIsWT.module.scss";

const WhatIsWT = () => {
	return (
		<div className={styles.whatIsWTContainer}>
			<h2 className={styles.whatIsWTHeader}>Explore. Rate. Repeat.</h2>
			<p className={styles.whatIsWTParagraph}>
				What&apos;s Turning? is a music discovery community where you
				review an album of the day, every day.
			</p>
			<p className={styles.whatIsWTParagraph}>
				Every day, a new album is selected and posted to the site. You
				can listen to the album on Spotify, and then write a review of
				it. Your review will be added to the album&apos;s page, where it
				will be visible to other users. You can also read reviews
				written by other users, and vote on the reviews you like.
			</p>
			<p className={styles.whatIsWTParagraph}>
				You can also view the album&apos;s page without writing a
				review. Here, you can see the album&apos;s cover art, tracklist,
				and a description of the album written by an AI. You can also
				see the album&apos;s average rating, and the top 5 reviews.
			</p>
		</div>
	);
};

export default WhatIsWT;
