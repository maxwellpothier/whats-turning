import styles from "./scoreIcon.module.scss";

const ScoreIcon = ({score, className}) => {
	return (
		<div className={`${styles.scoreBorder} ${className}`}>
			<span className={styles.score}>{score}</span>
		</div>
	);
};

export default ScoreIcon;