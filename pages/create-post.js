import Theme from "../components/theme/Theme";
import Image from "next/image";
import Container from "../components/theme/Container";
import { getAllAlbums } from "../utils/endpoints/albumsApi";
import { useState } from "react";
import WTButton from "../components/WTButton";
import { useForm } from "react-hook-form";
import HorizontalLine from "../components/theme/HorizontalLine";
import { createUserPost } from "../utils/endpoints/postApi";
import { getUser } from "../utils/authUtils";

import styles from "./createPost.module.scss";
import { toastError } from "../utils/toastUtils";

const CreatePost = () => {
	const hookForm = useForm();

	const submitForm = async (userData) => {
		try {
			const {id} = await getUser();
			const {data: albumData} = await getAllAlbums();
			const {id: albumId} = albumData.data[albumData.data.length - 1];

			const {data} = await createUserPost({
				userId: id,
				score: userData.score,
				review: userData.review,
				albumId: albumId
			});
			window.location.href = "/profile";
		} catch (err) {
			toastError(err.response?.data?.message);
		}
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
							src={"https://i.discogs.com/hdGhbaRjPSMBPhA52lUkubOw_1m1FbN6edkbqEwy9qo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg"}
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