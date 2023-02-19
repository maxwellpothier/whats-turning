import Theme from "../components/theme/Theme";
import Image from "next/image";
import Container from "../components/theme/Container";

import styles from "./createPost.module.scss";
import { useState } from "react";
import WTButton from "../components/WTButton";
import { useForm } from "react-hook-form";

const CreatePost = () => {
	const hookForm = useForm();

	const submitForm = (userData) => {
		console.log(userData);
	};

	return (
		<Theme>
			<form className={styles.formWrap} onSubmit={hookForm.handleSubmit(submitForm)}>
				<Container className={styles.createSubheading}>
					<Image
						priority
						height={"250"}
						width={"250"}
						src={"https://i.discogs.com/hdGhbaRjPSMBPhA52lUkubOw_1m1FbN6edkbqEwy9qo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg"}
						alt={""}
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
			</form>
		</Theme>
	);
};

export default CreatePost;