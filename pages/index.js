import Posts from "../components/Posts";
import TodaysAlbum from "../components/TodaysAlbum";
import Header from "../components/Header";
import { getUser } from "../utils/authUtils";


const Home = () => {
	return (
		<>
			<Header/>
			<div>Home Page</div>
			<TodaysAlbum/>
			<Posts/>
			<button onClick={getUser}>Who am i?</button>
		</>
	);
};

export default Home;