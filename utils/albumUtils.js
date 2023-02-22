import { getTodaysAlbum } from "./endpoints/albumApi";

export const getAotd = async () => {
	try {
		const {data} = await getTodaysAlbum();
		return data.todaysAlbum;
	} catch (err) {
		toastError(err?.response?.data?.message);
	};
};