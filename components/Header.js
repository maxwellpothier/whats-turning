import styles from "./header.module.scss"

import Link from 'next/link';
import WTLogo from "./WTLogo";
import WTButton from "./WTButton";

const Header = () => {
	return (
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
				<WTButton content={"Join the Waitlist"}/>
			</div>
        </div>
    );
};

export default Header;