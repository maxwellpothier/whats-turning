import Image from "next/image";

const ArtWithScore = ({album, rating}) => {
	return (
		<>
			<Image
				src={album.artUrl}
				alt={album.title}
				width={120}
				height={120}
			/>
		</>
	);
};

export default ArtWithScore;