import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../Utilities/localstorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [addToCart, setAddToCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect( () => {

        if(bottles.length > 0) {
            const storedCart = getStoredCart();

            const savedCart = [];

            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id);
            
                if(bottle){
                    savedCart.push(bottle);
                }
            }

            setAddToCart(savedCart)

        }

    },[addToCart, bottles])

    const handleAddToCart = (item) => {
        if(addToCart.includes(item)){
            alert("The Item is Already added")
            return;
        }
        

        addToLS(item.id);
        
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