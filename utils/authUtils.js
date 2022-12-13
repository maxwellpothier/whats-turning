import { getLoggedInUser, login } from "./endpoints/identityApi";
import { toastError } from "./toastUtils";

export const authenticateExistingUser = async (formData) => {
	try {
		const {data} = await login(formData);
		localStorage.setItem("WT_ACCESS_TOKEN", data.token);
		window.location.replace("/");
	} catch (err) {
		toastError(err?.response?.data?.message);
	}
};

export const getUser = async () => {
	const {data} = await getLoggedInUser();
	return data.data;
};