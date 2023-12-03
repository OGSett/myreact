import React, { useEffect, useState, useCallback } from "react";
import techImg1 from "./assets/technology/image-launch-vehicle-landscape.jpg";
import techImg2 from "./assets/technology/image-space-capsule-landscape.jpg";
import techImg3 from "./assets/technology/image-spaceport-landscape.jpg";
import techImgPort1 from "./assets/technology/image-launch-vehicle-portrait.jpg";
import techImgPort2 from "./assets/technology/image-space-capsule-portrait.jpg";
import techImgPort3 from "./assets/technology/image-spaceport-portrait.jpg";
import a from "./a.svg"
import './technology.css'
import NavBar from'./NavBar.js'

const Thecnology = ({ data, isLoading, error }) => {

    const [currentTech, setCurrentTech] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imgToPut = [techImgPort1, techImgPort2, techImgPort3];
    const imgMobToPut = [techImg1, techImg2, techImg3];
    const [currentTechImage, setCurrentTechImage] = useState(windowWidth <= 768 ? imgMobToPut[0] : imgToPut[0]);

    const updateDimensions = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);
    
    
    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [updateDimensions]);

    useEffect(() => {
        if (data && data.technology) {
            setCurrentTech(data.technology[0]);
            setCurrentTechImage(windowWidth <= 768 ? imgMobToPut[0] : imgToPut[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, windowWidth]);

    const handleLaunch = () => {
        setCurrentTech(data.technology[0]);
        setCurrentTechImage(windowWidth <= 768 ? imgMobToPut[0] : imgToPut[0]);
    };

    const handleSpacePort = () => {
        setCurrentTech(data.technology[1]);
        setCurrentTechImage(windowWidth <= 768 ? imgMobToPut[1] : imgToPut[1]);
    };

    const handleSpaceCapsule = () => {
        setCurrentTech(data.technology[2]);
        setCurrentTechImage(windowWidth <= 768 ? imgMobToPut[2] : imgToPut[2]);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!currentTech) return <div>No technology data available.</div>;


    return ( 
        <div className="">
            <div className="navContainer">
                <NavBar />
            </div>
                <h3 className="pick-crew"><span className="counter">02</span> SPACE LAUNCH 101</h3>
            <div className="techComp">
                <div className="techInfo">
                    <div className="choseTech">
                        <div className="a"><img src={a} alt="" />
                            <div className="techLi" onClick={handleLaunch}>
                                <span>1</span>
                            </div>
                        </div>
                        <div className="a"><img src={a} alt="" />
                            <div className="techLi" onClick={handleSpacePort}>
                                <span>2</span>
                            </div>
                        </div>
                        <div className="a"><img src={a} alt="" />
                            <div className="techLi" onClick={handleSpaceCapsule}>
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                    <div className="bioTech">
                        <span>THE TERMINOLOGY…</span>
                        <h3 className="techName">{currentTech.name}</h3>
                        <p className="biofont2">{currentTech.description}</p>
                    </div>
                </div>
                <div className="techImg">
                    <img src={currentTechImage} alt="" />
                </div>
            </div>
        </div>
     );
}

export default Thecnology;

