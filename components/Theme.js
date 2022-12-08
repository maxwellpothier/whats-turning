import styles from "./theme.module.scss";

import Header from "./Header";
import Container from "./Container";

const Theme = ({children}) => {
	return (
		<div>
			<Header/>
			<Container>
				<div className={styles.contentContainer}>
					{children}
				</div>
			</Container>
			{/* Footer will go here eventually */}
		</div>
	);
};

export default Theme;