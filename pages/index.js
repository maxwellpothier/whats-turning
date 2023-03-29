import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import HorizontalLine from "../components/theme/HorizontalLine";
import Head from "next/head";
import { getAotd } from "../utils/albumUtils";

import styles from "./index.module.scss";

const Home = ({aotd}) => {
	return (
		<Theme>
			<Head>
				<title>Home / What&apos;s Turning?</title>
				<link rel={"icon"} href={"/favicon.ico"}/>
			</Head>
			<TodaysAlbum
				aotd={aotd}
				className={styles.homepageAotdContainer}
			/>
			<HorizontalLine/>
		</Theme>
	);
};

export const getStaticProps = async () => {
	const album = await getAotd();
	console.log("HEREEEEEEEE", album);
    return {
        props: {
            aotd: album,
        },
    };
};

export default Home;