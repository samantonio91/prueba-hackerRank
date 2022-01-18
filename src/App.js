import React, {useEffect} from "react";
import './App.css';
import ProductList from "./components/product-list";
import CartList from "./components/cart";
import 'h8k-components';
import useHackShop from './hooks/useHackShop'
const title = "HackerShop";
function App() {
    const { handleProducts, products, cart, toggleProducts } = useHackShop();
    useEffect(() => {
        handleProducts()
    }, [])
    console.log('iji',cart)
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row shop-component">
                <ProductList products={products} toggleProducts={toggleProducts}  />
                <CartList cart={cart}  toggleProducts={toggleProducts}  />
            </div>
        </div>
    );
}

export default App;