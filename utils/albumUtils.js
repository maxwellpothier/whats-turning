import {getTodaysAlbum} from "./endpoints/albumApi";
import {handleApiErrors} from "./errorUtils";

export const getAotd = async () => {
	try {
		const {data} = await getTodaysAlbum();
		return data.todaysAlbum;
	} catch (err) {
		handleApiErrors(err);
	}
};
