import styles from "./wtButton.module.scss";

const WTButton = ({content, className, type, onClick}) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${className}`}
			type={type}
		>
			{content}
		</button>
	);
};

export default WTButton;
