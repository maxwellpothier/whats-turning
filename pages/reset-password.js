import {useState, useEffect} from "react";
import AuthForm from "../components/auth/AuthForm";
import WTInput from "../components/WTInput";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {resetPassword} from "../utils/authUtils";
import LoadMaster from "../components/theme/LoadMaster";

const ResetPassword = () => {
	const hookForm = useForm();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!router.isReady) return;
		if (!router.query.token) {
			router.push("/login");
		}
	}, [router]);

	const onSubmit = async data => {
		setIsLoading(true);
		await resetPassword(data, router.query.token, router);
		setIsLoading(false);
	};

	const buttonAreaContent = {
		ctaText: "Remember your password?",
		linkText: "Log In",
		buttonText: "Reset Password",
		linkHref: "/login",
	};

	return (
		<LoadMaster isLoading={isLoading}>
			<AuthForm
				onSubmit={onSubmit}
				hookForm={hookForm}
				buttonAreaContent={buttonAreaContent}>
				<WTInput
					label={`New Password for ${router.query.user}`}
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
		</LoadMaster>
	);
};

export default ResetPassword;
