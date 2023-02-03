import styles from "./theme.module.scss";

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

const Theme = ({children, button}) => {
	return (
		<div className={styles.appContainer}>
			<Header button={button}/>
			<Container>
				<div className={styles.contentContainer}>
					{children}
				</div>
			</Container>
			<Footer/>
		</div>
	);
};

export default Theme;