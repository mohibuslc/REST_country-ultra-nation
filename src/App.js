    import logo from './logo.svg';
    import {useState, useEffect} from 'react';
    import Country from '../src/components/Country/Country';
import Cart from './components/Cart/Cart';
    import './App.css';

    function App() {

      const [countries, setCountries] = useState([]);
    
      const [ cart , setCart]= useState([]);


      useEffect(()=>{

        fetch('https://restcountries.eu/rest/v2/all')
        
      .then(res => res.json())
      .then(data =>{
        setCountries(data);

        console.log (data);
        data.map(country => country.name)
        })

      
      },[])

       const handleAdd = (country) => { 
         
        
        const newCart = [...cart , country];
        setCart (newCart)
        //console.log('Added_Country', country)};


       }
      return (
        
        <div className="App">

        <h2>Countries Loadad:{countries.length}</h2>
        <h4>Country Adde:{cart.length} </h4>
        <Cart cart ={cart}></Cart>

        {

          countries.map(country => <Country country = {country}  handleAdd ={handleAdd} key ={country.alpha3Code} ></Country>)

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
    };

    export default App;
