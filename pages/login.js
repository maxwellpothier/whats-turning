import { useForm } from "react-hook-form";
import AuthForm from "../components/auth/AuthForm";
import WTInput from "../components/WTInput";
import { authenticateExistingUser } from "../utils/authUtils";
import { toastError } from "../utils/toastUtils";

const Login = () => {
	const hookForm = useForm();

	const onSubmit = async (userData) => {
		try {
			await authenticateExistingUser(userData);
		} catch (err) {
			toastError(err?.response?.data?.message);
		}
	};

	const buttonAreaContent = {
		ctaText: "Don't have an account?",
		linkText: "Sign Up",
		buttonText: "Log In",
		linkHref: "/signup",
	};

	return (
		<AuthForm onSubmit={onSubmit} hookForm={hookForm} buttonAreaContent={buttonAreaContent}>
			<WTInput
				name={"username"}
				type={"username"}
				label={"Username"}
				hookForm={hookForm}
			/>
			<WTInput
				name={"password"}
				type={"password"}
				label={"Password"}
				hookForm={hookForm}
			/>
		</AuthForm>
	);
};

export default Login;