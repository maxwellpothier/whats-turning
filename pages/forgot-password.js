import AuthForm from "../components/auth/AuthForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import WTInput from "../components/WTInput";
import { sendForgotPasswordEmail } from "../utils/authUtils";
import LoadMaster from "../components/theme/LoadMaster";

const ForgotPassword = () => {
	const hookForm = useForm();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await sendForgotPasswordEmail(data);
		setIsLoading(false);
	}

	const buttonAreaContent = {
		ctaText: "Remember your password?",
		linkText: "Log In",
		buttonText: "Send Link",
		linkHref: "/login",
	};

	return (
		<LoadMaster isLoading={isLoading}>
			<AuthForm onSubmit={onSubmit} hookForm={hookForm} buttonAreaContent={buttonAreaContent}>
				<WTInput
					label={"Email associated with account"}
					name={"email"}
					hookForm={hookForm}
					type={"email"}
				/>
			</AuthForm>
		</LoadMaster>
	);
};

export default ForgotPassword;