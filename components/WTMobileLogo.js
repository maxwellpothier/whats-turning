import styles from "./wtMobileLogo.module.scss";

const WTMobileLogo = ({className}) => {
	return (
		<>
			<span className={`${styles.mobileLogo} ${className}`}>WT?</span>
		</>
	);
};

export default WTMobileLogo;