import { createUserPost, getPost } from "./endpoints/postApi";
import { toastError } from "./toastUtils";

export const checkPostToCreate = async (formData, albumId, router) => {
	try {
		await createUserPost(
			formData.score,
			formData.review,
			albumId,
		);

		await router.push("/profile");
	} catch (err) {
		handleApiErrors(err);;
	}
};

export const getPostForId = async (postId) => {
	try {
		const {data} = await getPost(postId);
		return data.post;
	} catch (err) {
		handleApiErrors(err);;
	}
};