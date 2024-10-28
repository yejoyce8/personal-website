import useScrollNavigation from "../hooks/useScrollNavigation.jsx";
import {motion} from "framer-motion";
import WorkCard from "../components/WorkCard.jsx";
import "./workpage.css"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function WorkPage() {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.scrollHeight / 2 - window.innerHeight / 2
    });
   document.documentElement.classList.add('dark-mode');
    useScrollNavigation("/projects", "/aboutMe");
    const companyId = "Google"
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                navigate(`/work/${companyId}`);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
    }, [navigate, companyId]);
    return (
                <motion.div
                    className="page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="container-center">

                        <div className="planet"></div>
                        <div className="orbit"></div>
                        <div className="orbit orbit-2"></div>
                        <div className="orbit orbit-3"></div>
                        <div className="moon"></div>
                        <div className="moon moon-2"></div>
                        <div className="moon moon-3"></div>

                        <div className="work-card-container">
                            <WorkCard
                                startDate={workData[0].startDate}
                                endDate={workData[0].endDate}
                                company={workData[0].company}
                                position={workData[0].position}
                                tech={workData[0].tech}
                            />
                        </div>
                        <div className="enter-container">
                            <p className= "press-to-learn"> PRESS TO LEARN MORE</p>
                            <div>
                                <div className="enter-button-body"></div>
                                <div className="enter-button-side"></div>
                                <p className="enter-word"> ENTER </p>
                            </div>
                        </div>

                    </div>
                </motion.div>
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
    {
        startDate: "January 2023",
        endDate: "Present",
        company: "Tech Corp",
        position: "Software Engineer",
        tech: ["JavaScript", "React", "Node.js"]
    }

]