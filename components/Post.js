const Post = ({post}) => {
	const {album, belongsToId, content, id, rating} = post;

	return (
		<div>
			Post
			{album.title}
			{belongsToId}
			{content}
			{id}
			{rating}
		</div>
	);
};

export default Post;