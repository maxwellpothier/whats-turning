import styles from "./post.module.scss";

import Container from "./Container";

const Post = ({post}) => {
	const {belongsTo, album, content, rating} = post;

	return (
		<Container className={styles.postCard}>
			<div>{belongsTo.username} - {album.title}</div>
			<div>{content}</div>
			<div>{rating}</div>
		</Container>
	);
};

export default Post;