import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./iconsfont.css";
import { Provider } from "react-redux";
import store from "./redux/reduxState";
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#root")
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
