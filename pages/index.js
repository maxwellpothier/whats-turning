import Head from "next/head";
import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import HorizontalLine from "../components/theme/HorizontalLine";
import AIDescription from "../components/AIDescription";
import {getAotd, getAiDescription} from "../utils/albumUtils";

import styles from "./index.module.scss";

const Home = ({aotd, description}) => {
	return (
		<Theme>
			<Head>
				<title>Home / What&apos;s Turning?</title>
				<link rel={"icon"} href={"/favicon.ico"} />
				<meta
					property={"og:title"}
					content={"Home / What's Turning?"}
				/>
				<meta
					property={"og:description"}
					content={
						"What's Turning? is a music discovery community where you review an album of the day, every day."
					}
				/>
				<meta property={"og:image"} content={"/favicon.ico"} />
				<meta
					property={"og:url"}
					content={"https://www.whatsturning.com"}
				/>
			</Head>
			<TodaysAlbum aotd={aotd} className={styles.homepageAotdContainer} />
			<HorizontalLine />
			<AIDescription albumTitle={aotd.title} description={description} />
		</Theme>
	);
};

export const getStaticProps = async () => {
	const album = await getAotd();
	const description = await getAiDescription(album.title);
	return {
		props: {
			aotd: album,
			description: description,
		},
	};
};

export default Home;
