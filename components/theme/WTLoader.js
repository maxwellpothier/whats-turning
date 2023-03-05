import styles from "./wtLoader.module.scss";

const WTLoader = ({isLoading, className, children}) => {
	const loader = (
		<div className={`${styles.pageContainer} ${className}`}>
			<div className={styles.loader}>
				<span className={styles.loadDot}></span>
				<span className={styles.loadDot}></span>
				<span className={styles.loadDot}></span>
			</div>
		</div>
	);

	return (isLoading ? loader : children);
};

export default WTLoader;