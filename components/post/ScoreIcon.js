import styles from "./scoreIcon.module.scss";

const ScoreIcon = ({score}) => {
	return (
		<div className={styles.scoreBorder}>
			<span className={styles.score}>{score}</span>
		</div>
	);
};

export default ScoreIcon;