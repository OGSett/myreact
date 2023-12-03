import star from "./assets/shared/logo.svg"
import { Link } from 'react-router-dom';
import b from "./b.svg"
import { useState } from "react";
import close from "./close.svg"
import './navbar.css'

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
        console.log(isNavExpanded);
    };

    const closeNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    
    console.log(isNavExpanded);

    return ( 
        <nav className="navBar-container">
            <div className="leftside">
                <Link to="/"><img className="logo" src={star} alt="/" /></Link>
            <button className={`burger ${isNavExpanded ? "gone" : ""}`}><img src={b} onClick={toggleNav}  alt="/" /></button>
            <div className="line isGone"></div>
            </div>
            <div className={`navDiv ${isNavExpanded ? "expanded" : ""}`}>
                <img src={close} onClick={closeNav} alt="" />
                <Link to="/home"><button className="navBtn"><span className="bedir isGone">00</span> HOME</button></Link>
                <Link to="/destination"><button className="navBtn"><span className="bedir isGone">00</span> DESTINATION</button></Link>
                <Link to="/crew"><button className="navBtn"><span className="bedir isGone">00</span> CREW</button></Link>
                <Link to="/technology"><button className="navBtn"><span className="bedir isGone">00</span> TECHNOLOGY</button></Link>
            </div>
        </nav>
     );
}
 
export default NavBar;
            

            