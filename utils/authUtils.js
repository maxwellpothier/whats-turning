import Cookies from "js-cookie";
import { getLoggedInUser, login, signup } from "./endpoints/identityApi";
import { toastError, toastSuccess } from "./toastUtils";

const setJwtCookie = (accessToken) => {
	Cookies.set("WT_ACCESS_TOKEN", accessToken, {expires: 1});
};

export const authenticateExistingUser = async (formData, router) => {
	try {
		const {data} = await login(formData);
		setJwtCookie(data.accessToken);
		await router.push("/");
	} catch (err) {
		toastError(err?.response?.data?.message);
	}
};

export const establishNewUser = async (formData, router) => {
	if (formData.password !== formData.confirmPassword) {
		toastError("Passwords don't match");
	}
	delete formData.confirmPassword;

	try {
		const {data} = await signup(formData);
		setJwtCookie(data.accessToken);
		await router.push("/");
	} catch (err) {
		toastError(err?.response?.data?.message);
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