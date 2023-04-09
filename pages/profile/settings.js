import Theme from "../../components/theme/Theme";
import WTButton from "../../components/WTButton";
import LoadMaster from "../../components/theme/LoadMaster";
import Head from "next/head";
import {useEffect, useState} from "react";
import {getUser, isAuthenticated, updateUserInfo} from "../../utils/authUtils";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

import styles from "./settings.module.scss";

const Settings = () => {
	const router = useRouter();
	const hookForm = useForm();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			if (!isAuthenticated()) {
				await router.push("/");
				return;
			}

			const userData = await getUser();
			hookForm.setValue("username", userData.username);
			hookForm.setValue("firstName", userData.firstName);
			hookForm.setValue("lastName", userData.lastName);
			hookForm.setValue("bio", userData.bio);
			hookForm.setValue("musicProfile", userData.musicProfile);
			hookForm.setValue("email", userData.email);
			setIsLoading(false);
		})();
	}, [hookForm, router]);

	const saveEdits = async formData => {
		console.log(formData);
		setIsLoading(true);
		await updateUserInfo(formData, router);
		setIsLoading(false);
	};

	return (
		<Theme>
			<Head>
				<title>Profile Settings / WT?</title>
				<meta property="og:title" content="Profile Settings / WT?" />
				<meta
					property="og:description"
					content="Edit your profile settings"
				/>
				<meta property="og:image" content="/favicon.ico" />
				<meta
					property="og:url"
					content="https://www.whatsturning.com/signup"
				/>
			</Head>
			<h1 className={styles.editProfileTitle}>Edit Profile</h1>
			<LoadMaster className={styles.loadMaster} isLoading={isLoading}>
				<form
					className={styles.editForm}
					onSubmit={hookForm.handleSubmit(saveEdits)}
				>
					<div className={styles.formEntry}>
						<label>Username</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("username")}
						/>
					</div>
					<div className={styles.formEntry}>
						<label>First name</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("firstName")}
						/>
					</div>
					<div className={styles.formEntry}>
						<label>Last name</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("lastName")}
						/>
					</div>
					<div className={styles.formEntry}>
						<label>Bio</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("bio")}
						/>
					</div>
					<div className={styles.formEntry}>
						<label>Music streaming profile</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("musicProfile")}
						/>
					</div>
					<div className={styles.formEntry}>
						<label>Email</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("email")}
							type={"email"}
						/>
					</div>
					<WTButton content={"Save"} type={"submit"} />
				</form>
			</LoadMaster>
		</Theme>
	);
};

export default Settings;
