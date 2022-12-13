import "../styles/globals.css";
import "reset-css";
// import {ChakraProvider} from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MyApp = ({Component, pageProps}) => {
	return (
		<>
			<Component {...pageProps}/>
			<ToastContainer/>
		</>
	);
};

export default MyApp;