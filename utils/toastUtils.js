import {toast} from "react-toastify";

export const toastError = message => {
	toast.error(message, {
		position: "top-right",
		autoClose: 3000,
	});
};

export const toastSuccess = message => {
	toast.success(message, {
		position: "top-right",
		autoClose: 3000,
	});
};
