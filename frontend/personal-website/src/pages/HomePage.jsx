import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from "react-router-dom";
import useScrollNavigation from "../hooks/useScrollNavigation.jsx";
import {motion} from "framer-motion";

export default function HomePage() {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
    useScrollNavigation("/aboutMe", "");
    document.documentElement.classList.remove('dark-mode');
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="top-page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 0.5 }}
        >
            <div className="top-container-center">
                <div className="center">
                    <h3>👋 Hey there! I’m</h3>
                    <h1>JOYCE YE</h1>
                    <div>
                        <button>DOWNLOAD MY RESUME</button>
                    </div>
                    <div style={{marginTop: '2em'}}>
                        <a
                            href="#"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Link to="/contactMe">
                                LET'S CONNECT
                            </Link>
                            {isHovered &&<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '1em'}} />}
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}