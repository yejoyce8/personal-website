import useScrollNavigation from "../hooks/useScrollNavigation.jsx";
import {motion} from "framer-motion";
import WorkCard from "../components/WorkCard.jsx";
import "./workpage.css"
export default function WorkPage() {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.scrollHeight / 2 - window.innerHeight / 2
    });
   document.documentElement.classList.add('dark-mode');
    //useScrollNavigation("/projects", "/aboutMe");
        return (
            <div>
                <motion.div
                    className="page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container-center">
                        <div >
                            <WorkCard
                                startDate={workData[0].startDate}
                                endDate={workData[0].endDate}
                                company={workData[0].company}
                                position={workData[0].position}
                                tech={workData[0].tech}
                            />
                        </div>
                        {/*<h1>Work page</h1>*/}
                    </div>
                </motion.div>
            </div>
    )
}

const workData = [
    {
        company: "Google",
        position: "Software Engineer Intern (STEP)",
        startDate: "May 2022",
        endDate: "Aug 2022",
        tech: ["Java", "gRPC", "REST", "JUnit", "Mockito", "Guice"]
    },

]

const sampleData = {
    startDate: "January 2023",
    endDate: "Present",
    company: "Tech Corp",
    position: "Software Engineer",
    tech: ["JavaScript", "React", "Node.js"]
}