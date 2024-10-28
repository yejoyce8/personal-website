import React, {useState} from "react";
import { NavLink} from "react-router-dom";
import menuIcon from "../assets/MenuIcon.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './dropdownmenu.css';
function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <a
                href="https://www.linkedin.com/in/joyce-ye-x/"
                className="top-left-button"
                target="_blank"
            >
                <FontAwesomeIcon icon={faLinkedin} className="icon-button" />
            </a>

        <div
            className="menu-container"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >

            <button className="menu-button"><img src={menuIcon} alt=""/></button>
            {isOpen && (
                <div className="dropdown">
                    <NavLink to="/home" className={({isActive}) => isActive? "active-link" : ""}>
                        <div className="hover-underline-animation">
                            HOME
                        </div>
                    </NavLink>
                    <NavLink to="/aboutMe" className={({isActive}) => isActive? "active-link" : ""}>
                        <div className="hover-underline-animation">
                            ABOUT ME
                        </div>
                    </NavLink>
                    <NavLink to="/work" className={({isActive}) => isActive? "active-link" : ""}>
                        <div className="hover-underline-animation">
                            WORK
                        </div>
                    </NavLink>
                    <NavLink to="/projects" className={({isActive}) => isActive? "active-link" : ""}>
                        <div className="hover-underline-animation">
                            PROJECTS
                        </div>
                    </NavLink>
                    <NavLink to="/contactMe" className={({isActive}) => isActive? "active-link" : ""}>
                        <div className="hover-underline-animation">
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