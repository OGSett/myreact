import { Route, Routes, useLocation, BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import Home from "./home"
import Crew from "./crew"
import Technology from "./technology"
// import navbar from "./"
import Destination from "./destination"
import useFetch from './useFetch';


function App() {

  const { data, isLoading, error } = useFetch();
    const BodyStyleHandler = () => {
      const location = useLocation();
      useEffect(() => {
        console.log("Current path:", location.pathname);
        document.body.className = ''; 
        if (location.pathname === '/home')
        {
          document.body.classList.add('home-style');
        } 
        else if (location.pathname === '/')
        {
          document.body.classList.add('home-style');
        }
        else if (location.pathname === '/destination')
        {
          document.body.classList.add('destination-style');
        }
        else if (location.pathname === '/crew')
        {
          document.body.classList.add('crew-style');
        }
        else if (location.pathname === '/technology')
        {
          document.body.classList.add('technology-style');
        }
      }, [location.pathname]);  
    };

  return (
    <Router>
      <BodyStyleHandler />
      <Routes>
        <Route path='/' element={<Home data={data} isLoading={isLoading} error={error}/>}/>
        <Route path='/home' element={<Home data={data} isLoading={isLoading} error={error}/>}/>
        <Route path='/crew' element={<Crew data={data} isLoading={isLoading} error={error}/>}/>
        <Route path='/destination' element={<Destination data={data} isLoading={isLoading} error={error}/>}/>
        <Route path='/technology' element={<Technology data={data} isLoading={isLoading} error={error}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
