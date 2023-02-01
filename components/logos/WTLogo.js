import WTFullLogo from "./WTFullLogo";
import styles from "./wtLogo.module.scss";
import WTMobileLogo from "./WTMobileLogo";

const WTLogo = () => {
	return (
		<>
			<WTMobileLogo className={styles.smallLogo}/>
			<WTFullLogo className={styles.bigLogo}/>
		</>
	);
};

export default WTLogo;