import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserPage = () => {
	const router = useRouter();
	const [userId, setUserId] = useState("");

	useEffect(() => {
		setUserId(router.query.userId);
	}, [router]);

	return (
		<div>
			User Page Here!
			{userId}
		</div>
	);
};

export default UserPage;