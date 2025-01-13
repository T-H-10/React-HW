import {createBrowserRouter} from "react-router"
import AppLayout from "./components/pages/AppLayout"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
export const router=createBrowserRouter([
    {
    path: '/', element: <AppLayout/>,
    errorElement: <h1>error</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> },
            ]
    }
]);


