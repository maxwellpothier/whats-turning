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
import { checkPostToCreate } from "../utils/postUtils";
import LoadMaster from "../components/theme/LoadMaster";

import styles from "./createPost.module.scss";
import { useRouter } from "next/router";

const CreatePost = () => {
	const hookForm = useForm();
	const router = useRouter();
	const [aotd, setAotd] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const album = await getAotd();
			setAotd(album);
			setIsLoading(false);
		})();
	}, []);

	const submitForm = async (userData) => {
		setIsLoading(true);
		await checkPostToCreate(userData, aotd.id, router);
		setIsLoading(false);
	};

	return (
		<Theme>
			<LoadMaster isLoading={isLoading}>
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
			</LoadMaster>
		</Theme>
	);
};

export default CreatePost;