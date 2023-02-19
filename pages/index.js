import Theme from "../components/theme/Theme";
import TodaysAlbum from "../components/TodaysAlbum";
import PostCard from "../components/post/PostCard";
import HorizontalLine from "../components/theme/HorizontalLine";
import Container from "../components/theme/Container";
import SignupForm from "../components/auth/SignupForm";
import WTButton from "../components/WTButton";
import { getAllAlbums } from "../utils/endpoints/albumsApi";

import styles from "./index.module.scss";
import Head from "next/head";
import { useRef } from "react";

const Home = () => {
	const aotd = {
		title: "MM..FOOD",
		artist: "MF DOOM",
		yearReleased: 2004,
		url: "https://i.discogs.com/9st0aNIe6u_nrlWwW4lYywMEHLxNGlmbVPy2ieOs0AE/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0OTIz/Mi0xMjY2NDcyMjI3/LmpwZWc.jpeg",
	};

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

// export const getServerSideProps = async () => {
// 	const {data} = await getAllAlbums();
// 	const {title, artist, yearReleased, url} = data.data[data.data.length - 1];
// 	return {
// 		props: {
// 			aotd: {
// 				title,
// 				artist,
// 				yearReleased,
// 				url,
// 			},
// 		},
// 	};
// }

export default Home;