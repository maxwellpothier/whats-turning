import HowToStep from "./HowToStep";
import Container from "./theme/Container";
import {SlGraph} from "react-icons/sl";
import {CgMusicSpeaker} from "react-icons/cg";
import {TfiWrite} from "react-icons/tfi";

import styles from "./whatIsWT.module.scss";

const WhatIsWT = () => {
	return (
		<Container className={styles.descriptionContainer}>
			<h2 className={styles.whatIsWTHeader}>Explore. Rate. Repeat.</h2>
			<div className={styles.steps}>
				<HowToStep
					icon={<CgMusicSpeaker />}
					stepDescription={
						"Listen to the What's Turning Album of the Day any way you'd like."
					}
				/>
				<HowToStep
					icon={<TfiWrite />}
					stepDescription={
						"Click “Create Post” to leave a rating and optional short review."
					}
				/>
				<HowToStep
					icon={<SlGraph />}
					stepDescription={
						"Watch your profile grow along with your music taste and knowledge!"
					}
				/>
			</div>
		</Container>
	);
};

export default WhatIsWT;
