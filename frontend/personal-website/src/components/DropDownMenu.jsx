import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import menuIcon from "../assets/MenuIcon.svg";
import menuIconDarkMode from "../assets/MenuIconWhite.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './dropdownmenu.css';
function DropDownMenu() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const darkModePages = ['/work', '/projects', '/contactMe'];
    const isDarkMode = darkModePages.includes(location.pathname);
    return (
        <div>
            <a
                href="https://www.linkedin.com/in/joyce-ye-x/"
                className="top-left-button"
                target="_blank"
            >
                <FontAwesomeIcon icon={faLinkedin} className={`icon-button ${isDarkMode ? 'dark-mode' : ''}`}/>
            </a>

            <div
                className="menu-container"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <button className="menu-button"><img src={isDarkMode? menuIconDarkMode : menuIcon} alt=""/></button>
                {isOpen && (
                    <div className={`dropdown ${isDarkMode ? 'dark-mode' : ''}`}>
                        <NavLink to="/home" className={({isActive}) => isActive? "active-link" : ""}>
                            <div className={`hover-underline-animation  ${isDarkMode ? 'dark-mode' : ''}`}>
                                HOME
                            </div>
                        </NavLink>
                        <NavLink to="/aboutMe" className={({isActive}) => isActive? "active-link" : ""}>
                            <div className={`hover-underline-animation  ${isDarkMode ? 'dark-mode' : ''}`}>
                                ABOUT ME
                            </div>
                        </NavLink>
                        <NavLink to="/work" className={({isActive}) => isActive? "active-link" : ""}>
                            <div className={`hover-underline-animation  ${isDarkMode ? 'dark-mode' : ''}`}>
                                WORK
                            </div>
                        </NavLink>
                        <NavLink to="/projects" className={({isActive}) => isActive? "active-link" : ""}>
                            <div className={`hover-underline-animation  ${isDarkMode ? 'dark-mode' : ''}`}>
                                PROJECTS
                            </div>
                        </NavLink>
                        <NavLink to="/contactMe" className={({isActive}) => isActive? "active-link" : ""}>
                            <div className={`hover-underline-animation  ${isDarkMode ? 'dark-mode' : ''}`}>
                                CONTACT ME
                            </div>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropDownMenu;