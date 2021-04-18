import logo from './logo.svg';
import {useState, useEffect} from 'react';
import Country from '../src/components/Country/Country';

import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
 

  useEffect(()=>{

    fetch('https://restcountries.eu/rest/v2/all')
    
   .then(res => res.json())
   .then(data =>{
     setCountries(data);

     console.log (data);
     data.map(country => country.name)
    })

  
  },[])

  return (
    <div className="App">

    <h2>Countries Loadad:{countries.length}</h2>
  

    {

      countries.map(country => <Country name={country.name}></Country>)
    }

  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
