import Head from "next/head";
import {useRouter} from "next/router";
import {useState} from "react";
import {useForm} from "react-hook-form";
import AuthForm from "../components/auth/AuthForm";
import LoadMaster from "../components/theme/LoadMaster";
import WTInput from "../components/WTInput";
import {establishNewUser} from "../utils/authUtils";

const Signup = () => {
	const hookForm = useForm();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async userData => {
		setIsLoading(true);
		await establishNewUser(userData, router);
		setIsLoading(false);
	};

	const buttonAreaContent = {
		ctaText: "Already have an account?",
		linkText: "Log In",
		buttonText: "Sign Up",
		linkHref: "/login",
	};

	return (
		<LoadMaster isLoading={isLoading}>
			<Head>
				<title>Sign Up / WT?</title>
				<meta property="og:title" content="Sign Up / WT?" />
				<meta
					property="og:description"
					content="Sign up for an account with What's Turning"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<meta property="og:image" content="/favicon.ico" />
				<meta
					property="og:url"
					content="https://www.whatsturning.com/signup"
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
					name={"email"}
					type={"email"}
					label={"Email"}
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
		</LoadMaster>
	);
};

export default Signup;
