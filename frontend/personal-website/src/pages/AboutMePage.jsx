import useScrollNavigation from "../hooks/useScrollNavigation.jsx";
import {motion} from "framer-motion";

export default function AboutMePage() {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.scrollHeight / 2 - window.innerHeight / 2
    });
    useScrollNavigation("/work", "/home");
    return (
        <motion.div
            className="page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 1 }}
        >
            <div className="container-center">
                <div className="center">
                    <p className="p-center"> I’m a 4th year Computer Science student at the University of Waterloo.
                        When I’m not studying up on systems design or trying to create the next big thing, I’m reading trying to make it big as a digital artist and or designing new clothes.  </p>
                    <h2>I'm currently hyperfixated on</h2>
                    <div className="interests-text">Designing clothes</div>
                </div>
            </div>
        </motion.div>
    )
}