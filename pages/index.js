import styles from "./index.module.scss";

import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import PostCard from "../components/post/PostCard";

const Home = () => {
	return (
		<Theme>
			<TodaysAlbum className={styles.homepageAotdContainer}/>
			<div>
				<div className={styles.homepageCopy}>
					Find, rate, and review new music, everyday.
				</div>
				<PostCard/>
			</div>
		</Theme>
	);
};

export default Home;