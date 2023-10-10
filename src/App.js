import './App.css';
import React, {useEffect, useState} from "react";
import Products from "./Products";
import Cart from "./Cart";

function App() {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://fer-api.coderslab.pl/v1/exam5/products')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);



    return (
        <>
            {isLoaded ? <Products data={data} setCart={setCart} cart={cart}/> : <h2>Ładowanie...</h2>}
            <Cart cart={cart}/>

        </>


    );
}

export default App;