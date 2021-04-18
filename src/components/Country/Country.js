import React from 'react';

const Country = (props) => {
    console.log(props.name);

    return (
        <div>
            <h1> This Is A Country Of :{props.name}</h1>
        </div>
    );
};

export default Country;