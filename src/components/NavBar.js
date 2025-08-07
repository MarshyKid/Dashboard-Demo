import { NavLink } from "react-router-dom";
import './NavBar.css';
import wacsgIcon from '../assets/wacsg2048.png';
import { useState } from "react";

function NavBarLinks() {
    return (
        <div className="navbar-links">
                <div className="link-container">
                    <NavLink
                    to={"/"}
                    className={({isActive}) => (isActive ? 'active-link' : 'link')}
                    >Dashboard</NavLink>
                </div>
                <div className="link-container">
                    <NavLink
                    to={"/SizingTemplate"}
                    className={({isActive}) => (isActive ? 'active-link' : 'link')}
                    >Template</NavLink>
                </div>
                <div className="link-container">
                    <NavLink
                    to={"/GovSupply"}
                    className={({isActive}) => (isActive ? 'active-link' : 'link')}
                    >GovSupply</NavLink>
                </div>
                <div className="link-container">
                    <NavLink
                    to={"/GMS"}
                    className={({isActive}) => (isActive ? 'active-link' : 'link')}
                    >GMS</NavLink>
                </div>
            </div>
    )
}

function NavBar() {
    const [openNav, setopenNav] = useState(false);
    return (
        <div className="navbar">
            <div className="title">
                <img src={wacsgIcon} alt="wacsg icon" style={{ width: '30%' }}/>
                <span>UDAC</span>
            </div>
            <NavBarLinks />
            <div className="hidden-navbar">
                <button className={`hidden-navbar-button ${openNav ? "in" : ""}`} onClick={() => openNav ? setopenNav(false) : setopenNav(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            {true &&
                <div className={`hidden-navbar-options ${openNav ? 'in' : ''}`}>
                    <div className="hidden-navbar-links">
                        <div className="hidden-link-container">
                            <NavLink
                            to={"/"}
                            className={({isActive}) => (isActive ? 'active-link' : 'link')}
                            onClick={() => setopenNav(false)}
                            >Dashboard</NavLink>
                        </div>
                        <div className="hidden-link-container">
                            <NavLink
                            to={"/SizingTemplate"}
                            className={({isActive}) => (isActive ? 'active-link' : 'link')}
                            onClick={() => setopenNav(false)}
                            >Template</NavLink>
                        </div>
                        <div className="hidden-link-container">
                            <NavLink
                            to={"/GovSupply"}
                            className={({isActive}) => (isActive ? 'active-link' : 'link')}
                            onClick={() => setopenNav(false)}
                            >GovSupply</NavLink>
                        </div>
                        <div className="hidden-link-container">
                            <NavLink
                            to={"/GMS"}
                            className={({isActive}) => (isActive ? 'active-link' : 'link')}
                            onClick={() => setopenNav(false)}
                            >GMS</NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavBar;