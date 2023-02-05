import WTFullLogo from "../logos/WTFullLogo";
import WTButton from "../WTButton";
import styles from "./authForm.module.scss";

const AuthForm = ({onSubmit, hookForm, buttonAreaContent, children}) => {
	const {ctaText, linkText, buttonText, linkHref} = buttonAreaContent;

	return (
		<div className={styles.authFormOuterBox}>
			<WTFullLogo className={styles.formLogo}/>
			<form onSubmit={hookForm.handleSubmit(onSubmit)} className={styles.authForm}>
				{children}
				<div className={styles.buttonAreaContainer}>
					<div className={styles.moreInfo}>
						<div>{ctaText}</div>
						<a className={styles.signupLink} href={linkHref}>{linkText}</a>
						{/* <div>Forgot Password</div> */}
					</div>
					<WTButton
						type={"submit"}
						content={buttonText}
					/>
				</div>
			</form>
		</div>
	);
};

export default AuthForm;