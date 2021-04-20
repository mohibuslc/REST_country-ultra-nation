import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    let totalPopulation =0;

    for(let i =0 ; i<cart.length ; i++){ 
    const pl = cart[i];
    totalPopulation =totalPopulation+ pl.population;
}
    return (
        <div>
            <h2> This is cart:{cart.length} </h2>
            <h4>Population : {totalPopulation}</h4>
        </div>
    );
};

export default Cart;