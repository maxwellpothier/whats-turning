import AuthForm from "../components/auth/AuthForm";
import WTInput from "../components/WTInput";
import {useForm} from "react-hook-form";

const ResetPassword = () => {
	const hookForm = useForm();


	const onSubmit = async (data) => {
		console.log(data);
	}

	const buttonAreaContent = {
		ctaText: "Remember your password?",
		linkText: "Log In",
		buttonText: "Send Link",
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