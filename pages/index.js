import styles from "./home.module.scss";

import Theme from "../components/Theme";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";

const ctaContent = [
	"Stop waiting for a new album from your favorite artist to discover new music.",
	"What's Turning will randomly select an album of the day for you to listen to and review.",
	"Here's how simple it is:",
	"1. Log into WT and check out the album of the day.",
	"2. Listen to the album however you like. We recommend listening straight through to get a better understanding.",
	"3. Create a post associated with the given album. How'd it rank compared to other stuff you've heard recently?",
	"Check out if others in the community agreed with you. Did you get some new insight based on their opinion?",
	"As you do this daily, watch your profile grow!"
];

const Home = () => {
	return (
		<Theme>
			<Container>
				<SectionTitle>
					Explore new music. Everyday.
				</SectionTitle>

				<div>
					{ctaContent.map((piece, i) => (
						<div key={i} className={styles.ctaParagraph}>
							{piece}
						</div>
					))}
				</div>
			</Container>
		</Theme>
	);
};

export default Home;