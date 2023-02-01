import styles from "./index.module.scss";

import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import PostCard from "../components/post/PostCard";
import HorizontalLine from "../components/theme/HorizontalLine";
import Container from "../components/theme/Container";

const Home = () => {
	return (
		<Theme>
			<TodaysAlbum className={styles.homepageAotdContainer}/>
			<HorizontalLine/>
			<div className={styles.homepageExample}>
				<div className={styles.homepageCopy}>
					Find, rate, and review new music, everyday.
				</div>
				<PostCard/>
			</div>
			<HorizontalLine/>
			<Container>
				<h3 className={styles.excuse}>We aren&apos;t quite finished yet, but here&apos;s how it&apos;ll work:</h3>
				<ul className={styles.stepList}>
					<li>Listen to the What&apos;s Turning Album of the Day</li>
					<li>Click “Create Post”</li>
					<li>Leave a rating and optional short review</li>
					<li>Watch your profile grow along with your taste and understanding of music!</li>
				</ul>
			</Container>
		</Theme>
	);
};

export default Home;