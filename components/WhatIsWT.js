import HowToStep from "./HowToStep";
import PostCard from "./post/PostCard";
import Container from "./theme/Container";

import styles from "./whatIsWT.module.scss";

const WhatIsWT = () => {
	return (
		<Container className={styles.descriptionContainer}>
			<h2 className={styles.whatIsWTHeader}>Explore. Rate. Repeat.</h2>
			<div className={styles.steps}>
				<HowToStep
					stepNumber={1}
					stepDescription={
						"Listen to the What's Turning Album of the Day any way you'd like."
					}
				/>
				<HowToStep
					stepNumber={2}
					stepDescription={
						"Click “Create Post” to leave a rating and optional short review."
					}
				/>
				<HowToStep
					stepNumber={3}
					stepDescription={
						"Watch your profile grow along with your music taste and knowledge!"
					}
				/>
			</div>
		</Container>
	);
};

export default WhatIsWT;
