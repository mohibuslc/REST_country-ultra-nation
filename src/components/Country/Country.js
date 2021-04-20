import React from 'react';


const Country = (props) => {
    console.log(props.country);
const {name, population,region,flag,languages} = props.country;
const FlagStyle ={height:'50px'};
const handleAdd = props.handleAdd;
const design = { border : '3px solid red ', margin: '10px', textAlign:'left', padding : '15px'};


    return (
        <div style = {design}>
            <img style= {FlagStyle} src ={flag} alt = ""/>
            <h4> This Is A Country Of :{name}</h4>
            <p>population : {population}</p>
            <p>Region:{region}</p>
            <button onClick={() =>handleAdd(props.country)}> Add_Country</button>
            
        </div>
    );
};

export default Country;