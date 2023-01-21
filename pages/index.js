import styles from "./index.module.scss";

import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import PostCard from "../components/post/PostCard";
import HorizontalLine from "../components/HorizontalLine";

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
			<div className={styles.productDescription}>
				<div>
				We aren&apos;t quite finished yet, but here&apos;s how it&apos;ll work:
				</div>
			</div>
		</Theme>
	);
};

export default Home;