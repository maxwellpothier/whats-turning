import { authenticateExistingUser } from "../utils/authUtils";
import Posts from "../components/posts";

const Home = () => {
	const authenticate = async () => {
		await authenticateExistingUser("max", "asdfasdf");
	}
	
	return (
		<>
			<div>Home Page</div>
			<button onClick={authenticate}>Click here to login</button>

			<Posts/>
		</>
	);
};

export default Home;