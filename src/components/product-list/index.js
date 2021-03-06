import React, {Component} from "react";
import "./index.css";
// custom Hook
import useHackShop from '../../hooks/useHackShop'
const ProductList = ({products, toggleProducts}) => {
    // const {  } = useHackShop();
        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {products.map((product, i) => {
                    return (
                        <section className="w-30"
                                 data-testid={'product-item-' + i}
                                 key={product.id}>
                            <div className="card ma-16">
                                <img alt="Your Cart" src={product.image}
                                     className="d-inline-block align-top product-image"/>
                                <div className="card-text pa-4">
                                    <h5 className="ma-0 text-center">{product.name}</h5>
                                    <p className="ma-0 mt-8 text-center">${product.price}</p>
                                </div>
                                <div className="card-actions justify-content-center pa-4">
                                    <button className="x-small outlined" data-testid="btn-item-add" onClick={() => toggleProducts('add', product)}>
                                        Add To Cart
                                    </button>

                                    <button className="x-small danger" data-testid="btn-item-remove" onClick={() => toggleProducts('delete', product)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        );
    }

export default ProductList
