import WTFullLogo from "../logos/WTFullLogo";
import Container from "../theme/Container";
import WTInput from "../WTInput";
import AuthForm from "../AuthForm";

import styles from "./signupForm.module.scss";
import { useForm } from "react-hook-form";
import WTButton from "../WTButton";

const SignupForm = () => {
	const hookForm = useForm();

	const onSubmit = () => {
		console.log("Hello there");
	};

	return (
		<Container className={styles.formContainer}>
			<WTFullLogo className={styles.logo}/>
			<form className={styles.authForm}>
				<input
					className={styles.authInput}
					placeholder={"Username"}
					type={"text"}
				/>
				<input
					className={styles.authInput}
					placeholder={"Full Name"}
					type={"text"}
				/>
				<input
					className={styles.authInput}
					placeholder={"Email"}
					type={"text"}
				/>
				<input
					className={styles.authInput}
					placeholder={"Password"}
					type={"password"}
				/>
				<input
					className={styles.authInput}
					placeholder={"Confirm Password"}
					type={"password"}
				/>
				<WTButton
					content={"Sign Up"}
				/>
			</form>
		</Container>
	);
};
export default SignupForm;