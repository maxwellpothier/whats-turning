import { useForm } from "react-hook-form";
import AuthForm from "../components/auth/AuthForm";
import WTInput from "../components/WTInput";
import { establishNewUser } from "../utils/authUtils";
import { toastError } from "../utils/toastUtils";

const Signup = () => {
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

	const buttonAreaContent = {
		ctaText: "Already have an account?",
		linkText: "Log In",
		buttonText: "Sign Up",
		linkHref: "/login",
	};

	return (
		<AuthForm onSubmit={onSubmit} hookForm={hookForm} buttonAreaContent={buttonAreaContent}>
			<WTInput
				name={"username"}
				type={"username"}
				label={"Username"}
				hookForm={hookForm}
			/>
			<div style={{display: "flex", gap: "10px"}}>
				<WTInput
					name={"firstName"}
					type={"text"}
					label={"First name"}
					hookForm={hookForm}
				/>
				<WTInput
					name={"lastName"}
					type={"text"}
					label={"Last name"}
					hookForm={hookForm}
				/>
			</div>
			<WTInput
				name={"email"}
				type={"email"}
				label={"Email"}
				hookForm={hookForm}
			/>
			<WTInput
				name={"password"}
				type={"password"}
				label={"Password"}
				hookForm={hookForm}
			/>
			<WTInput
				name={"confirmPassword"}
				type={"password"}
				label={"Confirm password"}
				hookForm={hookForm}
			/>
		</AuthForm>
	);
};

export default Signup;