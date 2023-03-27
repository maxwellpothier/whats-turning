import AuthForm from "../components/auth/AuthForm";
import { useForm } from "react-hook-form";
import WTInput from "../components/WTInput";
import { sendForgotPasswordEmail } from "../utils/authUtils";
import { toastSuccess } from "../utils/toastUtils";

const ForgotPassword = () => {
	const hookForm = useForm();


	const onSubmit = async (data) => {
		await sendForgotPasswordEmail(data);
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
				label={"Email associated with account"}
				name={"email"}
				hookForm={hookForm}
				type={"email"}
			/>
		</AuthForm>
	);
};

export default ForgotPassword;