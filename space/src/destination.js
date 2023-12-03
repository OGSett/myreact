import { useState, useEffect } from "react";
import moonImg from "./assets/destination/image-moon.png"
import marsImg from "./assets/destination/image-mars.png"
import europaImg from "./assets/destination/image-europa.png"
import titanImg from "./assets/destination/image-titan.png"
import NavBar from "./NavBar.js"
import './destination.css'

const Destination = ({data, isLoading, error}) => {

    const [currentDestination, setCurrentDestination] = useState(null);
    const [currentDestinationImage, setCurrentDestinationImage] = useState(moonImg);

    useEffect(() => {
        if (data && data.destinations) {
            setCurrentDestination(data.destinations[0]);
        }
    }, [data]);
    const itsMoon = () => {
        setCurrentDestination(data.destinations[0]);
        setCurrentDestinationImage(moonImg);
    };
    const itsMars = () => {
        setCurrentDestination(data.destinations[1]);
        setCurrentDestinationImage(marsImg);
    };
    const itsEuropa = () => {
        setCurrentDestination(data.destinations[2]);
        setCurrentDestinationImage(europaImg);
    };
    const itsTitan = () => {
        setCurrentDestination(data.destinations[3]);
        setCurrentDestinationImage(titanImg);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!currentDestination) return <div>No destination data available.</div>;


    return ( 
        <div className="dest-contenent">
            <div className="navContainer">
                <NavBar />
            </div>
            <h3 className="pick-dest"><span className="counter">01 </span>Pick your destination</h3>
            <div className="dataContainer">
                <div className="dest-image-container">
                    <img src={currentDestinationImage} alt="" />
                </div>
                <div className="infoContainer">
                    <div className="dest-holder">
                        <div className="chose-dest" >
                            <div className="planetBtn" onClick={itsMoon}><h3>Moon</h3></div>
                            <div className="planetBtn" onClick={itsMars}><h3>Mars</h3></div>
                            <div className="planetBtn" onClick={itsEuropa}><h3>Europa</h3></div>
                            <div className="planetBtn" onClick={itsTitan}><h3>Titan</h3></div>
                        </div>
                        <h1 className="nameDest">{currentDestination.name}</h1>
                    </div>
                    <div className="about">
                        <p>{currentDestination.description}</p>
                    </div>
                    <div className="line-dest"></div>
                    <div className="distAndTime">
                        <div className="dist">
                            <span>AVG. DISTANCE</span>
                            <h2>{currentDestination.distance}</h2>
                        </div>
                        <div className="time">
                            <span>Est. travel time</span>
                            <h2>{currentDestination.travel}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Destination;