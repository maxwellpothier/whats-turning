import styles from "./whatIsWT.module.scss";

const WhatIsWT = () => {
	return (
		<div className={styles.whatIsWTContainer}>
			<h2 className={styles.whatIsWTHeader}>Explore. Rate. Repeat.</h2>
			<p className={styles.whatIsWTParagraph}>
				Welcome to What&apos;s Turning? - the app that helps you
				discover new music every day! Here&apos;s how it works: Check
				out the Album of the Day - we handpick a new album every day for
				you to listen to. Listen to the album and rate it on a scale of
				1 to 5 stars. Leave a review of the album, sharing your
				thoughts, feelings, and opinions. Keep track of your progress
				and music taste by viewing your personal profile. What&apos;s
				Turning? is perfect for music lovers of all levels. Whether
				you&apos;re a casual listener, or a die-hard fan, you&apos;ll
				find something new and exciting every day. So join us today, and
				discover the music that&apos;s turning heads!
			</p>
		</div>
	);
};

export default WhatIsWT;
