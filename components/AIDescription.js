import Container from "./theme/Container";

import styles from "./aiDescription.module.scss";
import {getAiDescription} from "../utils/albumUtils";

const AIDescription = ({albumTitle, description}) => {
	const callToOpenAI = async () => {};

	return (
		<Container>
			<Container>
				<h2 className={styles.moreAboutTitle}>
					More about {albumTitle}
				</h2>
			</Container>
			<p className={styles.moreAboutText}>{description}</p>
		</Container>
	);
};

export default AIDescription;
