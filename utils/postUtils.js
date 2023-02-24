import { createUserPost } from "./endpoints/postApi";
import { toastError } from "./toastUtils";

export const checkPostToCreate = async (formData, albumId) => {
	try {
		await createUserPost(
			formData.score,
			formData.review,
			albumId,
		);

		window.location.href = "/profile";
	} catch (err) {
		toastError(err?.response?.data?.message);
	}
};