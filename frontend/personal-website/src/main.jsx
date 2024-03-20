import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import ContactMePage from "./pages/ContactMePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import StoryModePage from "./pages/StoryModePage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import Main from "./pages/Main.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <HomePage/>
    },
    {
        path: "/aboutMe",
        element: <AboutMePage/>
    },
    {
        path: "/contactMe",
        element: <ContactMePage/>
    },
    {
        path: "/projects",
        element: <ProjectsPage/>
    },
    {
        path: "/storyMode",
        element: <StoryModePage/>
    },
    {
        path: "/work",
        element: <WorkPage/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);