import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./Components/stateful/App";

//Rendering the React App into the HTML DOM Element "root"
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);