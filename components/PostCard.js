import styles from "./postCard.module.scss";

import Container from "./Container";
import Link from "next/link";

const PostCard = ({post}) => {
	const {id, belongsTo, album, content, rating} = post;

	return (
		<Container className={styles.postCard}>
			<Link href={`${belongsTo.id}/${id}`}>
				{belongsTo.username} - {album.title}
				{content}
				{rating}
			</Link>
		</Container>
	);
};

export default PostCard;