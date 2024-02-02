import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';



function App() {

  const [ starships, setStarships ] = useState([]);

  useEffect(() => {
    async function fetchData (){
      try {
        const starships = await getAllStarships();

        console.log('starship data:', starships.results);

        setStarships({results: starships.results});
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, [])

  return (
    <div className="App">
      
      <Home starships={starships.results}/>

    </div>
  );
}

export default App;
