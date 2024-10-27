import useScrollNavigation from "../hooks/useScrollNavigation.jsx";

export default function ProjectsPage() {
    useScrollNavigation("/contactMe", "/work");

    return (
        <div className="container-center">
            <h1>Projects</h1>
        </div>
    )
}