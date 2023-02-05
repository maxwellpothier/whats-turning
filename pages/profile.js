import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUser } from "../utils/authUtils";

const Profile = () => {

	useEffect(() => {
		(async () => {
			const {data} = await getUser();
			console.log("User here", data);
		})();
	});

	return (
		<div>
			Profile
		</div>
	);
};

export default Profile;