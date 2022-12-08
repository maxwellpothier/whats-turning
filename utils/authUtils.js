import { login } from "./endpoints/identityApi";

const handleAuthErrors = (err) => {
	console.log("There's been an error", err);
};

export const authenticateExistingUser = async (formData) => {
	try {
		const {data} = await login(formData);
		localStorage.setItem("WT_ACCESS_TOKEN", data.token);
		window.location.replace("/");
	} catch (err) {
		handleAuthErrors(err);
	}

};