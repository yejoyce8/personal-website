import React, {useState} from "react";
import { NavLink} from "react-router-dom";
import menuIcon from "../assets/MenuIcon.svg";
function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="menu-container"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="menu-button"><img src={menuIcon} alt=""/></button>
            {isOpen && (
                <div className="dropdown">
                    <NavLink to="/" className={({isActive}) => isActive? "active-link" : ""}>
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
    );
}

export default DropDownMenu;