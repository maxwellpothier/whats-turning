import styles from "./howToStep.module.scss";

const HowToStep = ({icon, stepDescription}) => {
	return (
		<div className={styles.boxOutline}>
			<div className={styles.stepNumber}>{icon}</div>
			<div className={styles.description}>{stepDescription}</div>
		</div>
	);
};

export default HowToStep;
