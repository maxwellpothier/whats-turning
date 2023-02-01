import WTFullLogo from "./WTFullLogo";
import WTMobileLogo from "./WTMobileLogo";

import styles from "./wtLogo.module.scss";

const WTLogo = () => {
	return (
		<>
			<WTMobileLogo className={styles.smallLogo}/>
			<WTFullLogo className={styles.bigLogo}/>
		</>
	);
};

export default WTLogo;