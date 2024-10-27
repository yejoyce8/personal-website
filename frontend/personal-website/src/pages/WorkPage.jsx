import useScrollNavigation from "../hooks/useScrollNavigation.jsx";

export default function WorkPage() {
    useScrollNavigation("/projects", "/aboutMe");
    return (
        <div className="container-center">
            <h1>Work page</h1>
        </div>
    )
}