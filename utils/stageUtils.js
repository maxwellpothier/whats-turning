export const getBaseUrl = () => {
	return process.env.STAGE === "production" ? "https://wt-v2.onrender.com" : "https://wt-v2-dev.onrender.com";
};