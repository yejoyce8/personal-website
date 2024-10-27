import useScrollNavigation from "../hooks/useScrollNavigation.jsx";

export default function ContactMePage() {
    useScrollNavigation("", "/projects");

    return (
        <div className="container-center">
            <h1>Contact me</h1>
        </div>
    )
}