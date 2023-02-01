import styles from "./wtFullLogo.module.scss";

const WTFullLogo = ({className}) => {
	return (
		<div>
			<span className={`${styles.fullLogo} ${className}`}>What&apos;s Turning?</span>
		</div>
	);
};

export default WTFullLogo;