import useScrollNavigation from "../hooks/useScrollNavigation.jsx";
import {motion} from "framer-motion";
import "./aboutme.css"
import {useEffect, useState} from "react";
import TextTransition, {presets} from "react-text-transition";

export default function AboutMePage() {
    window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.scrollHeight / 2 - window.innerHeight / 2
    });
    document.documentElement.classList.remove('dark-mode');
    useScrollNavigation("/work", "/home");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index+1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);
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
                    <h2>What I'm up to</h2>
                    <div className="center">
                        <TextTransition springConfig={presets.gentle} className="interests-text">
                            {hobbies[index%hobbies.length]}
                        </TextTransition>
                    </div>

                </div>
            </div>
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </motion.div>
    )
}

const hobbies = [
    "CODING",
    "MAKING ART",
    "DESIGNING CLOTHES",
];