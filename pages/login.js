import Head from "next/head";
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
			<Head>
				<title>Log In / WT?</title>
				<meta property="og:title" content="Log In / WT?" />
				<meta
					property="og:description"
					content="Log in to your account"
				/>
				<meta property="og:image" content="/favicon.ico" />
				<meta
					property="og:url"
					content="https://www.whatsturning.com/login"
				/>
			</Head>
			<AuthForm
				onSubmit={onSubmit}
				hookForm={hookForm}
				buttonAreaContent={buttonAreaContent}
			>
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
