import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import HorizontalLine from "../components/theme/HorizontalLine";
import Head from "next/head";
import { getAotd } from "../utils/albumUtils";
import { useEffect, useRef, useState } from "react";

import styles from "./index.module.scss";
import WTLoader from "../components/theme/WTLoader";

const Home = () => {
	return (
		<Theme>
			<Head>
				<title>Home / What&apos;s Turning?</title>
				<link rel={"icon"} href={"/favicon.ico"}/>
			</Head>
			<TodaysAlbum
				className={styles.homepageAotdContainer}
			/>
			<HorizontalLine/>
		</Theme>
	);
};

export default Home;