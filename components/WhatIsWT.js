import PostCard from "./post/PostCard";

import styles from "./whatIsWT.module.scss";

const WhatIsWT = () => {
	const album = {
		title: "Speaking In Tongues",
		artist: "Talking Heads",
		artUrl: "https://i.discogs.com/w3G0LxzwepwIgx7NkozV23OhlQ3j0XZ3WsvHPH6J1DQ/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MDcx/OS0xNDM3NDU0NzA4/LTQ4OTQuanBlZw.jpeg",
		yearReleased: 1983,
	};

	return (
		<div className={styles.descriptionContainer}>
			<div>
				<h2 className={styles.whatIsWTHeader}>
					Explore. Rate. Repeat.
				</h2>
				<p className={styles.whatIsWTParagraph}>
					Welcome to What&apos;s Turning? - the app that helps you
					discover new music every day! <br /> Here&apos;s how it
					works:
					<ul>
						<li>
							Check out the Album of the Day - we handpick a new
							album every day for you to listen to.
						</li>{" "}
						<li>
							Listen to the album and rate it on a scale of 1 to 5
							stars.
						</li>{" "}
						<li>
							Leave a review of the album, sharing your thoughts,
							feelings, and opinions.
						</li>{" "}
						<li>
							Keep track of your progress and music taste by
							viewing your personal profile.
						</li>
					</ul>{" "}
					What&apos;s Turning? is perfect for music lovers of all
					levels. Whether you&apos;re a casual listener, or a die-hard
					fan, you&apos;ll find something new and exciting every day.
					So join us today, and discover the music that&apos;s turning
					heads!
				</p>
			</div>
			<PostCard
				post={{
					album: album,
					rating: 8.5,
				}}
			/>
		</div>
	);
};

export default WhatIsWT;
