import { getLoggedInUser, login, signup } from "./endpoints/identityApi";
import { toastError, toastSuccess } from "./toastUtils";

export const authenticateExistingUser = async (formData) => {
	try {
		const {data} = await login(formData);
		localStorage.setItem("WT_ACCESS_TOKEN", data.token);
		window.location.replace("/");
	} catch (err) {
		toastError(err?.response?.data?.message);
	}
};

export const establishNewUser = async (formData) => {
	if (formData.username.length === 0) {
		toastError("Username field is required");
	} else if (formData.firstName.length === 0) {
		toastError("First name field is required");
	} else if (formData.lastName.length === 0) {
		toastError("Last name field is required");
	} else if (formData.email.length === 0) {
		toastError("Email field is required");
	} else if (formData.password !== formData.confirmPassword) {
		toastError("Passwords don't match");
	} else if (formData.password.length < 8) {
		toastError("Password must be at least 8 characters");
	} else {
		delete formData.confirmPassword;

		try {
			const {data} = await signup(formData);
			localStorage.setItem("WT_ACCESS_TOKEN", data.token);
			toastSuccess("Signed up successfully!");
			window.location.replace("/");
		} catch (err) {
			toastError(err?.response?.data?.message);
		}
	}
};

export const getUser = async () => {
	const {data} = await getLoggedInUser();
	return data.data;
};