import {useState} from "react";
import {useForm} from "react-hook-form";
import AuthForm from "../components/auth/AuthForm";
import WTInput from "../components/WTInput";
import {authenticateExistingUser} from "../utils/authUtils";
import LoadMaster from "../components/theme/LoadMaster";
import {useRouter} from "next/router";

const Login = () => {
	const hookForm = useForm();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async userData => {
		setIsLoading(true);
		await authenticateExistingUser(userData, router);
		setIsLoading(false);
	};

	const buttonAreaContent = {
		ctaText: "Don't have an account?",
		linkText: "Sign Up",
		buttonText: "Log In",
		linkHref: "/signup",
		forgotHref: "/forgot-password",
	};

	return (
		<LoadMaster isLoading={isLoading}>
			<AuthForm
				onSubmit={onSubmit}
				hookForm={hookForm}
				buttonAreaContent={buttonAreaContent}>
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
		</LoadMaster>
	);
};

export default Login;
