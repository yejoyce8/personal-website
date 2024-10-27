import useScrollNavigation from "../hooks/useScrollNavigation.jsx";
import {motion} from "framer-motion";

export default function WorkPage() {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.scrollHeight / 2 - window.innerHeight / 2
    });
    useScrollNavigation("/projects", "/aboutMe");
        return (
        <motion.div
            className="page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 0.5 }}
        >
            <div className="container-center">
                <h1>Work page</h1>
            </div>
        </motion.div>
    )
}