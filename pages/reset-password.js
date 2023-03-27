import { useEffect } from "react";
import AuthForm from "../components/auth/AuthForm";
import WTInput from "../components/WTInput";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {resetPassword} from "../utils/authUtils";

const ResetPassword = () => {
	const hookForm = useForm();
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query.token) {
            router.push("/login");
        }
	}, [router]);

	const onSubmit = async (data) => {
		await resetPassword(data, router.query.token, router);
	}

	const buttonAreaContent = {
		ctaText: "Remember your password?",
		linkText: "Log In",
		buttonText: "Reset Password",
		linkHref: "/login",
	};

	return (
		<AuthForm onSubmit={onSubmit} hookForm={hookForm} buttonAreaContent={buttonAreaContent}>
			<WTInput
				label={"New Password for maxpothier"}
				name={"password"}
				hookForm={hookForm}
				type={"password"}
			/>
			<WTInput
				label={"Confirm New Password"}
				name={"confirmPassword"}
				hookForm={hookForm}
				type={"password"}
			/>
		</AuthForm>
	);
};

export default ResetPassword;