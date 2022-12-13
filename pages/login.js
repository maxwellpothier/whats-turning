import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AuthForm from "../components/AuthForm";
import WTInput from "../components/WTInput";
import { authenticateExistingUser } from "../utils/authUtils";


const Login = () => {
	const hookForm = useForm();
	const router = useRouter();

	const onSubmit = async (userData) => {
		try {
			await authenticateExistingUser(userData);
			console.log("Authenticated", response);
			// router.push("/");
		} catch (err) {
			console.error(err);
		}
	};

	const buttonAreaContent = {
		ctaText: "Don't have an account?",
		linkText: "Signup",
		buttonText: "Login",
		linkHref: "/signup",
	};

	return (
		<AuthForm onSubmit={onSubmit} hookForm={hookForm} buttonAreaContent={buttonAreaContent}>
			<WTInput
				name={"username"}
				type={"username"}
				placeholder={"Email"}
				hookForm={hookForm}
			/>
			<WTInput
				name={"password"}
				type={"password"}
				placeholder={"Password"}
				hookForm={hookForm}
			/>
		</AuthForm>
	);
};

export default Login;