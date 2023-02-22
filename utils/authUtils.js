import Cookies from "js-cookie";
import { getLoggedInUser, login, signup } from "./endpoints/identityApi";
import { toastError, toastSuccess } from "./toastUtils";

export const authenticateExistingUser = async (formData) => {
	try {
		const {data} = await login(formData);
		Cookies.set("WT_ACCESS_TOKEN", data.accessToken);
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
			Cookies.set("WT_ACCESS_TOKEN", data.token);
			toastSuccess("Signed up successfully!");
			window.location.replace("/");
		} catch (err) {
			toastError(err?.response?.data?.message);
		}
	}
};

export const getUser = async () => {
	try {
		const {data} = await getLoggedInUser();
		return data.data;
	} catch (err) {
		toastError(err?.response?.data?.message);
	}
};

export const isAuthenticated = () => !!Cookies.get("WT_ACCESS_TOKEN");

export const unauthenticate = () => Cookies.remove("WT_ACCESS_TOKEN");