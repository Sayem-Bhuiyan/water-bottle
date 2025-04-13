import React from 'react';
import "./Bottle.css";

const Bottle = ({bottle, handleAddToCart}) => {
    const {img, name, price} = bottle;
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)} className='add-to-cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Bottle;