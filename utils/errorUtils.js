import { toastError } from "./toastUtils";

export const handleApiErrors = (err) => {
	const errorFromDb = !!err?.response?.data?.message;

	if (errorFromDb) {
		console.log("related");
		toastError(err.response.data.message);
		return;
	}

	err.response?.data?.errors.forEach(error => {
		toastError(error.msg);
	})
};