import { useEffect, useState } from "react";
import Theme from "../components/Theme";
import { getLoggedInUser, getUser } from "../utils/endpoints/identityApi";

const Profile = () => {
	const [user, setUser] = useState({});

	const getUserData = async () => {
		const {data} = await getLoggedInUser();
		setUser(data.data);
	};

	useEffect(() => {
		getUserData();
	});

	return (
		<Theme>
			Profile
			<div>
				{user.username}
			</div>
			<div>
				{user.firstName} {user.lastName}
			</div>
			<div>
				{user.email}
			</div>
			{user?.posts?.map((post, i) => (
				<div key={i}>
					{post.content}
				</div>
			))}
		</Theme>
	);
};

export default Profile;