import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [addToCart, setAddToCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handleAddToCart = (item) => {
        if(addToCart.includes(item)){
            alert("The Item is Already added")
            return;
        }
        const newAddToCart = [...addToCart, item]
        setAddToCart(newAddToCart);
        
    }

    return (
        <div>
            <div className="">
            <h2>Total Bottle: {bottles.length}</h2>
            <h3>Cart: {addToCart.length}</h3>
            </div>
            
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle bottle={bottle} handleAddToCart={handleAddToCart}/>)
                }
            </div>
        </div>
    );
};

export default Bottles;