import styles from "./wtButton.module.scss";

const WTButton = ({content, className, type}) => {
	return (
		<button
			className={`${styles.button} ${className}`}
			type={type}
		>
			{content}
		</button>
	);
};

export default WTButton;