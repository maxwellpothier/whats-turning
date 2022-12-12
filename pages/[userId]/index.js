import { useRouter } from "next/router";
import { getUser } from "../../utils/endpoints/identityApi";
import { useEffect, useState } from "react";

const UserPage = () => {
	const router = useRouter();
	const [user, setUser] = useState({});

	const getPageUser = async () => {
		const {data} = await getUser(router.query.userId);
		setUser(data.data);
	};

	useEffect(() => {
		if (user?.id) return;
		getPageUser();
	});

	return (
		<div>
			User Page Here!
			{user?.id}
			{user?.username}
			{user?.posts?.map((post, i) => (
				<div key={i}>
					{post.content}
				</div>
			))}
		</div>
	);
};

export default UserPage;