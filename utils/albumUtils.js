import {getTodaysAlbum, getAlbumDescription} from "./endpoints/albumApi";
import {handleApiErrors} from "./errorUtils";

export const getAotd = async () => {
	try {
		const {data} = await getTodaysAlbum();
		return data.todaysAlbum;
	} catch (err) {
		handleApiErrors(err);
	}
};

export const getAiDescription = async (albumName, artistName) => {
	try {
		const {data} = await getAlbumDescription(albumName, artistName);
		return data.gptResponse;
	} catch (err) {
		handleApiErrors(err);
	}
};
