import Theme from "../../components/theme/Theme";
import {useEffect, useState} from "react";
import {getUser, isAuthenticated} from "../../utils/authUtils";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

import styles from "./settings.module.scss";
import LoadMaster from "../../components/theme/LoadMaster";
import WTButton from "../../components/WTButton";

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

			const data = await getUser();
			hookForm.setValue("username", data.username);
			hookForm.setValue("firstName", data.firstName);
			hookForm.setValue("lastName", data.lastName);
			hookForm.setValue("bio", data.bio);
			hookForm.setValue("email", data.email);
			setIsLoading(false);
		})();
	}, [hookForm, router]);

	const saveEdits = async data => {
		console.log(data);
	};

	return (
		<Theme>
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
						<label>Email</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("email")}
							type={"email"}
						/>
					</div>
					<div className={styles.formEntry}>
						<label>New password</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("password")}
							type={"password"}
						/>
					</div>
					<div className={styles.formEntry}>
						<label>Confirm new password</label>
						<input
							className={styles.formInputField}
							{...hookForm.register("confirmPassword")}
							type={"password"}
						/>
					</div>
					<WTButton content={"Save"} type={"submit"} />
				</form>
			</LoadMaster>
		</Theme>
	);
};

export default Settings;
