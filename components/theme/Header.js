import styles from "./header.module.scss"

import Link from 'next/link';
import WTLogo from "../logos/WTLogo";
import WTButton from "../WTButton";

const Header = ({button}) => {
	return (
		<div className={styles.background}>
			<div className={styles.headerContainer}>
				<Link href={"/"} passHref>
					<WTLogo/>
				</Link>
				<div className={styles.hamburgerMenu}>
					<div className={styles.menuLink}/>
					<div className={styles.menuLink}/>
					<div className={styles.menuLink}/>
				</div>
				<div className={styles.headerLinks}>
					{button}
				</div>
			</div>
		</div>
    );
};

export default Header;