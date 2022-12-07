 import axios from "axios";
import {login} from "../utils/identityApi";

const Home = () => {
	const handleDummyRequest = async () => {
		const {data} = await login("max", "asdfasdf");
		console.log("Here's the token", data?.token);
	};

	return (
		<>
			<div>Home Page</div>
			<button onClick={handleDummyRequest}>Click here to login</button>
		</>
	);
};

export default Home;