import {useForm} from "react-hook-form";
import { authenticateExistingUser } from "../utils/authUtils";

const Login = () => {
	const {register, handleSubmit} = useForm();

	const submitForm = async (formData) => {
		await authenticateExistingUser(formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(submitForm)}>
				<input {...register("username")}/>
				<input {...register("password")} type={"password"}/>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;