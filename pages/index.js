import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import PostCard from "../components/post/PostCard";
import HorizontalLine from "../components/theme/HorizontalLine";
import Container from "../components/theme/Container";
import SignupForm from "../components/auth/SignupForm";

import styles from "./index.module.scss";
import Head from "next/head";

const Home = () => {
	return (
		<Theme>
			<Head>
				<title>Home / What&apos;s Turning?</title>
				<link rel={"icon"} href={"/favicon.ico"}/>
			</Head>

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
			<HorizontalLine/>
			<Container className={styles.waitlistSection}>
				<div className={styles.waitlistCopy}>
					<h3 className={styles.waitlistCta}>Signup now to join the waitlist!</h3>
					<h5 className={styles.singleEmailBit}>(We&apos;ll only send you a single email: When we are ready for you to sign up.)</h5>
				</div>
				<SignupForm/>
			</Container>
		</Theme>
	);
};

export default Home;