import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {

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
                        <a>
                            LET'S CONNECT
                        </a>
                    </div>
                </div>

            </div>

        </div>

    )
}