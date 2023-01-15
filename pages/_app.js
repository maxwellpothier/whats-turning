import "../styles/globals.css";
import "reset-css";
// import {ChakraProvider} from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";

const MyApp = ({Component, pageProps}) => {
	return (
		<>
			<Component {...pageProps}/>
			<Script strategy={"afterInteractive"} src={"https://www.googletagmanager.com/gtag/js?id=G-DZE177VCFL"}/>
			<Script
				id={'google-analytics'}
				strategy={"afterInteractive"}
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-DZE177VCFL');
					`,
				}}
			/>
			<ToastContainer/>
		</>
	);
};

export default MyApp;