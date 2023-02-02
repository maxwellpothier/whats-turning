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
	try {
		const {data} = await signup(formData);
		toastSuccess("Success");
	} catch (err) {
		toastError("Error occurred");
	}
};

export const getUser = async () => {
	const {data} = await getLoggedInUser();
	return data.data;
};