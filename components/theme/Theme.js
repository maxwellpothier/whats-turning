import styles from "./theme.module.scss";

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

const Theme = ({children}) => {
	return (
		<div className={styles.appContainer}>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</div>
	);
};

export default Theme;
