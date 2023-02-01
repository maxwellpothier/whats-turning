import styles from "./wtFullLogo.module.scss";

const WTFullLogo = ({className}) => {
	return (
		<>
			<span className={`${styles.fullLogo} ${className}`}>What&apos;s Turning?</span>
		</>
	);
};

export default WTFullLogo;