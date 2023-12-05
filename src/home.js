import NavBar from "./NavBar";

import "./home.css"


const Home = () => {
    return ( 
        <div className="main-home">
            <div className="navContainer">
                <NavBar /> 
            </div>               
            <div className="homeComp">
                <div className="home-mainText">
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="circ">
                    <h1>EXPLORE</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Home;