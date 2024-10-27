import HomePage from "./HomePage.jsx";
import AboutMePage from "./AboutMePage.jsx";
import WorkPage from "./WorkPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import ContactMePage from "./ContactMePage.jsx";

export default function Main() {
    return (
        <div>
            <section id="home">
                <HomePage/>
            </section>
            <section id="aboutMe">
                <AboutMePage/>
            </section>
            <section id="work">
                <WorkPage/>
            </section>
            <section id="projects">
                <ProjectsPage/>
            </section>
            <section id="contactMe">
                <ContactMePage/>
            </section>

        </div>
    )
}