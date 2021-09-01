import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import store from "./store/index";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyles />
		<App />
	</Provider>,
	document.getElementById("root")
);
