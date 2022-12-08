import styles from "./sectionTitle.module.scss";

const SectionTitle = ({children}) => {
	return (
		<div className={styles.title}>
			{children}
		</div>
	);
};

export default SectionTitle;