import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function HomePage() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className="container-center">
                <a
                    href="https://www.linkedin.com/in/joyce-ye-x/"
                    className="top-left-button"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="icon-button" />
                </a>
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