import styles from "./postCard.module.scss";

import Container from "./Container";
import Link from "next/link";

const PostCard = ({post}) => {
	const {belongsTo, album, content, rating} = post;

	return (
		<Container className={styles.postCard}>
			<Link href={"/post"}>{belongsTo.username} - {album.title}</Link>
			<Link href={"/post"}>{content}</Link>
			<Link href={"/post"}>{rating}</Link>
		</Container>
	);
};

export default PostCard;