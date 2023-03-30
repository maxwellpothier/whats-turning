import styles from "./wtLoader.module.scss";

const WTLoader = () => {
	return (
		<div className={styles.loader}>
			<span className={styles.loadDot}></span>
			<span className={styles.loadDot}></span>
			<span className={styles.loadDot}></span>
		</div>
	);
};

export default WTLoader;
