import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import PostCard from "../components/post/PostCard";
import HorizontalLine from "../components/theme/HorizontalLine";
import Container from "../components/theme/Container";
import SignupForm from "../components/auth/SignupForm";
import WTButton from "../components/WTButton";

import styles from "./index.module.scss";
import Head from "next/head";
import { useRef } from "react";

const Home = () => {
	return (
		<Theme>
			<Head>
				<title>Home / What&apos;s Turning?</title>
				<link rel={"icon"} href={"/favicon.ico"}/>
			</Head>

			<TodaysAlbum className={styles.homepageAotdContainer}/>
			<HorizontalLine/>
		
		</Theme>
	);
};

export default Home;