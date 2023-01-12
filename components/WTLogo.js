import styles from "./wtLogo.module.scss";

const WTLogo = () => {
	return (
		<>
			<span className={`${styles.logo} ${styles.smallLogo}`}>WT?</span>
			<span className={`${styles.logo} ${styles.fullLogo}`}>What&apos;s Turning?</span>
		</>
	);
};

export default WTLogo;