import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from "react-router-dom";
import useScrollNavigation from "../hooks/useScrollNavigation.jsx";

export default function HomePage() {
    useScrollNavigation("/aboutMe", "/");
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className="container-center">
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

        </div>

    )
}