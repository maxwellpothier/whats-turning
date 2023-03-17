import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import HorizontalLine from "../components/theme/HorizontalLine";
import Head from "next/head";
import { getAotd } from "../utils/albumUtils";
import { useEffect, useRef, useState } from "react";
import LoadMaster from "../components/theme/LoadMaster";

import styles from "./index.module.scss";

const Home = () => {
	const [aotd, setAotd] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const album = await getAotd();
			setAotd(album);
			setIsLoading(false);
		})();
	}, []);

	return (
		<Theme>
			<Head>
				<title>Home / What&apos;s Turning?</title>
				<link rel={"icon"} href={"/favicon.ico"}/>
			</Head>
			<LoadMaster isLoading={isLoading}>
				<TodaysAlbum
					aotd={aotd}
					className={styles.homepageAotdContainer}
				/>
				<HorizontalLine/>
			</LoadMaster>
		</Theme>
	);
};

export default Home;