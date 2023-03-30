import styles from "./header.module.scss";

import Link from "next/link";
import WTLogo from "../logos/WTLogo";
import WTButton from "../WTButton";
import {isAuthenticated, unauthenticate} from "../../utils/authUtils";
import {useEffect, useState} from "react";

const loggedOutLinks = (
	<>
		<a href={"/login"} className={styles.headerLink}>
			Log In
		</a>
		<WTButton
			content={"Sign Up"}
			onClick={() => (window.location.href = "/signup")}
		/>
	</>
);

const loggedInLinks = (
	<>
		<a href={"/profile"} className={styles.headerLink}>
			Profile
		</a>
		<a href={"/"} onClick={unauthenticate} className={styles.headerLink}>
			Log Out
		</a>
	</>
);

const Header = () => {
	const [headerLinks, setHeaderLinks] = useState(null);

	useEffect(() => {
		setHeaderLinks(isAuthenticated() ? loggedInLinks : loggedOutLinks);
	}, []);

	return (
		<div className={styles.background}>
			<div className={styles.headerContainer}>
				<Link href={"/"} passHref>
					<WTLogo />
				</Link>
				{/* <div className={styles.hamburgerMenu}>
					<div className={styles.menuLink}/>
					<div className={styles.menuLink}/>
					<div className={styles.menuLink}/>
				</div> */}
				<div className={styles.headerLinks}>{headerLinks}</div>
			</div>
		</div>
	);
};

export default Header;
