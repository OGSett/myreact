import crewImage1 from "./assets/crew/image-douglas-hurley.png"
import crewImage2 from "./assets/crew/image-mark-shuttleworth.png"
import crewImage3 from "./assets/crew/image-victor-glover.png"
import crewImage4 from "./assets/crew/image-anousheh-ansari.png"
import { useState, useEffect } from "react";
import NavBar from "./NavBar.js"
import './crew.css'


const Crew = ({ data, isLoading, error }) => {

    const [currentCrew, setCurrentCrew] = useState(null);
    const [currentCrewImage, setCurrentCrewImage] = useState(crewImage1);

    useEffect(() => {
        if (data && data.crew) {
            setCurrentCrew(data.crew[0]);
        }
    }, [data]);

    const ItsDOUG = () => {
        setCurrentCrew(data.crew[0]);
        setCurrentCrewImage(crewImage1);
    };
    const itsMark = () => {
        setCurrentCrew(data.crew[1]);
        setCurrentCrewImage(crewImage2);
    };
    const itsVictor = () => {
        setCurrentCrew(data.crew[2]);
        setCurrentCrewImage(crewImage3);
    };
    const itsAnousheh = () => {
        setCurrentCrew(data.crew[3]);
        setCurrentCrewImage(crewImage4);
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
                        <button className="crclCrew" onClick={ItsDOUG}></button>
                        <button className="crclCrew" onClick={itsMark}></button>
                        <button className="crclCrew" onClick={itsVictor}></button>
                        <button className="crclCrew" onClick={itsAnousheh}></button>
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