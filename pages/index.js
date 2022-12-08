import Posts from "../components/Posts";
import TodaysAlbum from "../components/TodaysAlbum";
import Header from "../components/Header";
import Theme from "../components/Theme";


const Home = () => {
	return (
		<Theme>
			<TodaysAlbum/>
			<Posts/>
		</Theme>
	);
};

export default Home;