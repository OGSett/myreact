import star from "./assets/shared/logo.svg"
import { Link } from 'react-router-dom';
import b from "./b.svg"
import { useEffect, useState } from "react";
import close from "./close.svg"
import './navbar.css'
import { useLocation } from "react-router-dom";

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isNavHome, setIsNavHome] = useState(true);
    const [isNavDest, setIsNavDest] = useState(false);
    const [isNavCrew, setIsNavCrew] = useState(false);
    const [isNavTech, setIsNavTech] = useState(false);

    const checkNavSize = () => {
        if (window.innerWidth <= 450)
        {
            setIsNavExpanded(true);
        }
        else
        {
            setIsNavExpanded(false);
        }
    };

    useEffect(() => {
        
        checkNavSize();
    
        window.addEventListener('resize', checkNavSize);
    
        return () => {
          window.removeEventListener('resize', checkNavSize);
        };
      }, []);

      console.log(isNavExpanded)

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const closeNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const location = useLocation();
    useEffect(()=> {
        if(location.pathname === "/home"){
            setIsNavHome(true)
            setIsNavDest(false)
            setIsNavCrew(false)
            setIsNavTech(false)
        }
        if(location.pathname === "/destination"){
            setIsNavHome(false)
            setIsNavDest(true)
            setIsNavCrew(false)
            setIsNavTech(false)
        }
        if(location.pathname === "/crew"){
            setIsNavHome(false)
            setIsNavDest(false)
            setIsNavCrew(true)
            setIsNavTech(false)
        }
        if(location.pathname === "/technology"){
            setIsNavHome(false)
            setIsNavDest(false)
            setIsNavCrew(false)
            setIsNavTech(true)
        }
    },[location.pathname])
    

    

    return ( 
        <nav className="navBar-container">
            <div className="leftside">
                <Link to="/"><img className="logo" src={star} alt="/" /></Link>
            <div className="line isGone"></div>
            </div>
            <div className="toggle-menu">
                <button className={` ${isNavExpanded ? "gone" : "burger"}`}><img src={b} onClick={toggleNav}  alt="/" /></button>
            </div>
            <div className={` ${isNavExpanded ? "expanded" : "navDiv"}`}>
                <img className="closeImg" src={close} onClick={closeNav} alt="" />
                <Link to="/home"><button className={`navBtn ${isNavHome ? "activeNavBtn" : ""}`} ><span className="bedir ">00</span> HOME</button></Link>
                <Link to="/destination"><button className={`navBtn ${isNavDest ? "activeNavBtn" : ""}`} ><span className="bedir ">01</span> DESTINATION</button></Link>
                <Link to="/crew"><button className={`navBtn ${isNavCrew ? "activeNavBtn" : ""}`} ><span className="bedir ">02</span> CREW</button></Link>
                <Link to="/technology"><button className={`navBtn ${isNavTech ? "activeNavBtn" : ""}`} ><span className="bedir ">03</span> TECHNOLOGY</button></Link>
            </div>
        </nav>
     );
}
 
export default NavBar;
            

            