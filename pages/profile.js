import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthenticated } from "../utils/authUtils";

const Profile = () => {
	const router = useRouter();

	useEffect(() => {
		(async () => {
			if (!isAuthenticated()) await router.push("/");
		})();
	});

	return (
		<div>
			Profile
		</div>
	);
};

export default Profile;