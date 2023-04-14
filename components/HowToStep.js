import styles from "./howToStep.module.scss";

const HowToStep = ({stepNumber, stepDescription}) => {
	return (
		<div className={styles.boxOutline}>
			<div className={styles.stepNumber}>{stepNumber}.</div>
			<div className={styles.description}>{stepDescription}</div>
		</div>
	);
};

export default HowToStep;
