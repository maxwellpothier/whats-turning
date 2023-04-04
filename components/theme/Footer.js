import styles from "./footer.module.scss";
import WTMobileLogo from "../logos/WTMobileLogo";
import {FaSpotify, FaGithub, FaTwitter, FaInstagram} from "react-icons/fa";
import {SiNotion} from "react-icons/si";

const Footer = () => {
	return (
		<div className={styles.background}>
			<div className={styles.footerContainer}>
				<div className={styles.contactSection}>
					<WTMobileLogo className={styles.footerLogo} />
					<div>
						<span className={styles.contactText}>Contact Us!</span>
						<a
							className={styles.emailLink}
							href={"mailto: whatsturning@outlook.com"}
						>
							whatsturning@outlook.com
						</a>
					</div>
					<div className={styles.contactText}>
						We would love to hear any feedback!
					</div>
				</div>
				<ul className={styles.socialLinks}>
					<a
						href="https://open.spotify.com/user/bg8527p8wb1nrpb6r8xf662r2?si=a32cb6c1e3214d3a"
						target={"_blank"}
						rel={"noreferrer"}
					>
						<FaSpotify className={styles.footerIcon} />
					</a>
					<a
						href="https://github.com/maxwellpothier/whats-turning/tree/main"
						target={"_blank"}
						rel={"noreferrer"}
					>
						<FaGithub className={styles.footerIcon} />
					</a>
					<a
						href="https://twitter.com/MaxPothier"
						target={"_blank"}
						rel={"noreferrer"}
					>
						<FaTwitter className={styles.footerIcon} />
					</a>
					<a
						href="https://www.instagram.com/whatsturning/"
						target={"_blank"}
						rel={"noreferrer"}
					>
						<FaInstagram className={styles.footerIcon} />
					</a>
					<a
						href="https://suave-feast-3f3.notion.site/Memo-f80780b6d4c7437085f23c0dd382c0e9"
						target={"_blank"}
						rel={"noreferrer"}
					>
						<SiNotion className={styles.footerIcon} />
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
