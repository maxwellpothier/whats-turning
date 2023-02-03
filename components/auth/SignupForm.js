import WTFullLogo from "../logos/WTFullLogo";
import Container from "../theme/Container";
import WTButton from "../WTButton";
import { useForm } from "react-hook-form";

import styles from "./signupForm.module.scss";
import { establishNewUser } from "../../utils/authUtils";
import { toastError } from "../../utils/toastUtils";

const SignupForm = () => {
	const hookForm = useForm();

	const onSubmit = async (userData) => {
		try {
			await establishNewUser(userData);
			gtag("event", "signup", {
				"email": userData.email,
			});
		} catch (err) {
			toastError("Uncaught error");
		}
	};

	return (
		<Container className={styles.formContainer}>
			<WTFullLogo className={styles.logo}/>
			<form
				className={styles.authForm}
				onSubmit={hookForm.handleSubmit(onSubmit)}
			>
				<input
					className={styles.authInput}
					placeholder={"Username"}
					{...hookForm.register("username")}
					type={"text"}
				/>
				<div className={styles.namesInputSection}>
					<input
						className={styles.authInput}
						placeholder={"First name"}
						{...hookForm.register("firstName")}
						type={"text"}
					/>
					<input
						className={styles.authInput}
						placeholder={"Last name"}
						{...hookForm.register("lastName")}
						type={"text"}
					/>
				</div>
				<input
					className={styles.authInput}
					placeholder={"Email"}
					{...hookForm.register("email")}
					type={"email"}
				/>
				<input
					className={styles.authInput}
					placeholder={"Password"}
					{...hookForm.register("password")}
					type={"password"}
				/>
				<input
					className={styles.authInput}
					placeholder={"Confirm password"}
					{...hookForm.register("confirmPassword")}
					type={"password"}
				/>
				<WTButton
					type={"submit"}
					content={"Sign Up"}
					className={styles.signupButton}
				/>
			</form>
		</Container>
	);
};
export default SignupForm;