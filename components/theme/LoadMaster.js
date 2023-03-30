import styles from "./loadMaster.module.scss";
import WTLoader from "./WTLoader";

const LoadMaster = ({isLoading, className, children}) => {
	return (
		<div className={`${styles.loadMaster} ${className}`}>
			{isLoading && (
				<>
					<div className={styles.loadMasterOverlay} />
					<WTLoader />
				</>
			)}
			{children}
		</div>
	);
};

export default LoadMaster;
