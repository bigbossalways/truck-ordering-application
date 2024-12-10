import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const render = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }
])

export default render;