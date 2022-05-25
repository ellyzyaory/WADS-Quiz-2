import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import "../App.css";
import HeroList from './HeroList';

const Home = () => {
    const titleStyle={marginBottom: 30}


     const [heroes, setHeroes] = useState(null);
     const [loading, isLoading] = useState(true);
     const [error, setError] = useState(true);

     useEffect(() => {
     fetch("http://127.0.0.1:8000/heroes/")
     .then(res => {
         if(!res.ok) {
            throw Error('Could not fetch the data')
         }
        return res.json();
     })
     .then(data => {
        console.log(data);
        setHeroes(data);
        isLoading(false);
        setError(null);
        
     })
     .catch((err) => {
         isLoading(false);
         setError(err.message);
     })
     }, []);
    return(
        <div>
            <Typography variant="h2" style={titleStyle}>List of Heroes</Typography>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            { heroes && <HeroList heroes={heroes} /> }
        </div>
    );

}

export default Home;
