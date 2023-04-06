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
			{/* <button
				onClick={() => {
					gtag("event", "weird_button_clicked", {
						app_name: "WT",
						screen_name: "Home",
					});
				}}
			>
				Click Me
			</button> */}
		</Theme>
	);
};

export const getStaticProps = async () => {
	const album = await getAotd();
	let description;
	if (process.env.STAGE != "localhost") {
		description = await getAiDescription(album.title, album.artist);
	} else {
		description =
			"There is an album that has had a massive impact on the music industry and remains highly regarded to this day. It has influenced countless musicians across various genres, and its songs are still covered and sampled by artists today. This album marked a turning point in the artist's career and helped to cement their status as one of the greatest of all time. It features a diverse range of songs, from soulful ballads to upbeat rockers, showcasing the artist's versatility and creativity. The album's production was innovative for its time and helped to set new standards in the recording industry. Despite being released several decades ago, this album continues to inspire and captivate listeners with its timeless sound and message.";
	}

	return {
		props: {
			aotd: album,
			description: description,
		},
	};
};

export default Home;
