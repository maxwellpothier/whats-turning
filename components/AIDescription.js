import Container from "./theme/Container";

import styles from "./aiDescription.module.scss";

const AIDescription = ({albumTitle, description}) => {
	return (
		<Container className={styles.descriptionWrapper}>
			<Container>
				<h2 className={styles.moreAboutTitle}>
					More about {albumTitle}
				</h2>
				<span className={styles.aiShoutout}>Powered by Open AI</span>
			</Container>
			<p className={styles.moreAboutText}>{description.trimStart()}</p>
		</Container>
	);
};

export default AIDescription;
