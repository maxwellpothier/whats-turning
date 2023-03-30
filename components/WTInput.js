import styles from "./wtInput.module.scss";

const WTInput = ({type, label, hookForm, name}) => {
	return (
		<div>
			<label className={styles.inputLabel}>{label}</label>
			<input
				className={styles.formInputField}
				{...hookForm.register(name)}
				type={type}
			/>
		</div>
	);
};

export default WTInput;
