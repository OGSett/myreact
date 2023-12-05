import crewImage1 from "./assets/crew/image-douglas-hurley.png"
import crewImage2 from "./assets/crew/image-mark-shuttleworth.png"
import crewImage3 from "./assets/crew/image-victor-glover.png"
import crewImage4 from "./assets/crew/image-anousheh-ansari.png"
import { useState, useEffect } from "react";
import NavBar from "./NavBar.js"
import './crew.css'


const Crew = ({ data, isLoading, error }) => {

    const [currentCrew, setCurrentCrew] = useState(null);
    const [itsDougBtn , setItsDougBtn] = useState(true)
    const [itsMarkBtn , setItsMarkBtn] = useState(false)
    const [itsVictorBtn , setItsVictor] = useState(false)
    const [itsAnuBtn , setItsAnuBtn] = useState(false)
    const [currentCrewImage, setCurrentCrewImage] = useState(crewImage1);
    
    useEffect(() => {
        if (data && data.crew) {
            setCurrentCrew(data.crew[0]);
        }
    }, [data]);

    const ItsDOUG = () => {
        setCurrentCrew(data.crew[0]);
        setCurrentCrewImage(crewImage1);
        setItsDougBtn(true);
        setItsMarkBtn(false);
        setItsVictor(false);
        setItsAnuBtn(false);
    };
    const itsMark = () => {
        setCurrentCrew(data.crew[1]);
        setCurrentCrewImage(crewImage2);
        setItsDougBtn(false);
        setItsMarkBtn(true);
        setItsVictor(false);
        setItsAnuBtn(false);
    };
    const itsVictor = () => {
        setCurrentCrew(data.crew[2]);
        setCurrentCrewImage(crewImage3);
        setItsDougBtn(false);
        setItsMarkBtn(false);
        setItsVictor(true);
        setItsAnuBtn(false);
    };
    const itsAnousheh = () => {
        setCurrentCrew(data.crew[3]);
        setCurrentCrewImage(crewImage4);
        setItsDougBtn(false);
        setItsMarkBtn(false);
        setItsVictor(false);
        setItsAnuBtn(true);
    };



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!currentCrew) return <div>No destination data available.</div>;

    return ( 

        <div className="crew-container">
            <div className="navContainer">
                <NavBar />
            </div>
                        <h3 className="pick-crew"><span className="counter">02</span> MEET THE CREW</h3>
            <div className="crewComp">
                <div className="info-side">
                    <div className="meetCrew">
                    </div>
                    <div className="bio-card">
                        <h1 className="rolefont">{currentCrew.role}</h1>
                        <h1 className="namefont">{currentCrew.name}</h1>
                        <p className="biofont">{currentCrew.bio}</p>
                    </div>
                    <div className="list-crew">
                        {/* <img src={test} alt="" /> */}
                        <button className={` ${itsDougBtn ? "crewSelected" : "crclCrew"} `} onClick={ItsDOUG}></button>
                        <button className={` ${itsMarkBtn ? "crewSelected" : "crclCrew"} `} onClick={itsMark}></button>
                        <button className={` ${itsVictorBtn ? "crewSelected" : "crclCrew"} `} onClick={itsVictor}></button>
                        <button className={` ${itsAnuBtn ? "crewSelected" : "crclCrew"} `} onClick={itsAnousheh}></button>
                    </div>           
                </div>
                <div className="imgCrewSide">
                    <img src={currentCrewImage} alt="" />
                </div>
            </div>
        </div>
     );


}
 
export default Crew;