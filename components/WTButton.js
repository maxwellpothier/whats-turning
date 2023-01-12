import styles from "./wtButton.module.scss";

const WTButton = ({content}) => {
	return (
		<div className={styles.button}>
			{content}
		</div>
	);
};

export default WTButton;