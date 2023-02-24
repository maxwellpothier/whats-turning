import Theme from "../components/theme/Theme";
import Image from "next/image";
import Container from "../components/theme/Container";
import WTButton from "../components/WTButton";
import { useForm } from "react-hook-form";
import HorizontalLine from "../components/theme/HorizontalLine";
import { createUserPost } from "../utils/endpoints/postApi";
import { getUser } from "../utils/authUtils";
import { getAotd } from "../utils/albumUtils";
import { toastError } from "../utils/toastUtils";
import { useEffect, useState } from "react";

import styles from "./createPost.module.scss";
import { checkPostToCreate } from "../utils/postUtils";

const CreatePost = () => {
	const hookForm = useForm();
	const [aotd, setAotd] = useState({});

	useEffect(() => {
		(async () => {
			const album = await getAotd();
			setAotd(album);
		})();
	}, []);

	const submitForm = async (userData) => {
		await checkPostToCreate(userData, aotd.id);
	};

	return (
		<Theme>
			<form className={styles.formWrap} onSubmit={hookForm.handleSubmit(submitForm)}>
				<div className={styles.createSubheading}>
					<Container>
						<Image
							priority
							height={"250"}
							width={"250"}
							src={aotd.artUrl}
							alt={""}
							className={styles.albumArt}
						/>
						<h1 className={styles.createQuestion}>How&apos;d you like the album?</h1>
					</Container>
					<input
						type={"text"}
						placeholder={"X.X"}
						maxLength={3}
						className={styles.scoreInput}
						{...hookForm.register("score")}
					/>
				</div>
				<HorizontalLine/>
				<div className={styles.reviewButtonSection}>
					<textarea
						className={styles.reviewTextArea}
						placeholder={"What made it worthy of the score you gave?"}
						{...hookForm.register("review")}
					/>
					<div className={styles.buttonWrapper}>
						<WTButton
							content={"Create Post"}
							type={"Submit"}
						/>
					</div>
				</div>
			</form>
		</Theme>
	);
};

export default CreatePost;