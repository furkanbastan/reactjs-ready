import "@/styles/reset.css";
import "@/styles/variable.css";
import "@/styles/global.css";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { Provider } from "react-redux";
import { store } from "./stores";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
