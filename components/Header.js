import { useEffect, useState } from "react";
import { getUser } from "../utils/authUtils";

const Header = () => {
	// const [currUsername, setCurrUsername] = useState("");

	// useEffect(() => {
	// 	(async () => {
	// 		const tempUser = await getUser();
	// 		setCurrUsername(tempUser.username);
	// 	})();
	// });
	
	return (
		<div>
			<a href={"/"}>Home</a>
			<a href={"/profile"}>Profile</a>
			<a href={"/login"}>Login</a>
			<a href={"/signup"}>Signup</a>

		</div>
	);
};

export default Header;