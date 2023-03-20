import axios from "axios";
import { getBaseUrl } from "../stageUtils";

const baseUrl = `${getBaseUrl()}/album`;

export const getTodaysAlbum = () => {
	return axios.get(`${baseUrl}/today`);
};