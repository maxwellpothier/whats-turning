import styles from "./wtButton.module.scss";

const WTButton = ({content, className}) => {
	return (
		<div className={`${styles.button} ${className}`}>
			{content}
		</div>
	);
};

export default WTButton;