import Posts from "../components/Posts";
import TodaysAlbum from "../components/TodaysAlbum";
import Header from "../components/Header";


const Home = () => {
	return (
		<>
			<Header/>
			<div>Home Page</div>
			<TodaysAlbum/>
			<Posts/>
		</>
	);
};

export default Home;