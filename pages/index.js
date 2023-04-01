import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import HorizontalLine from "../components/theme/HorizontalLine";
import Head from "next/head";
import {getAotd} from "../utils/albumUtils";

import styles from "./index.module.scss";

const Home = ({aotd}) => {
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
		</Theme>
	);
};

export const getStaticProps = async () => {
	const album = await getAotd();
	return {
		props: {
			aotd: album,
		},
	};
};

export default Home;
