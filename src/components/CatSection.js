import React from 'react';
import Product from './Product';
import { Controller, Scene } from 'react-scrollmagic';

export default function CatSection(props) {

    // get the props and assign products to it
    const { cart, products, truncate, openCart, getProduct, activeCart, addToCart, closeCart } = props;
    const firstProduct = products[0];
    
    console.log(props)

    // this component now has the products prop passed from ProductTable with the filtered out products.
    // As the products are now already filtered out all that needs to happen is render them.
    return (
        <div>
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin>
            <section key={firstProduct.id} className={"product " + (firstProduct.category === "honest skin creme" ? "first" :
                                                                    firstProduct.category === "best of organic products" ? "second" :
                                                                    firstProduct.category === "sprays and cremes" ? "third" :
                                                                    firstProduct.category === "best uv protection" ? "fourth" : "")}>
        
            <div className="main-title">
                        <h1>{firstProduct.category}</h1>
            </div>
        
                <div className="container product-container">
                    <div className="row">

                        {products.map(product => <Product product={product} 
                                                          cart={cart}
                                                          truncate={truncate}
                                                          openCart={openCart}
                                                          getProduct={getProduct}
                                                          addToCart={addToCart}
                                                          closeCart={closeCart}
                                                          activeCart={activeCart}
                                                          /> )}

                    </div>
            </div>
            </section>
                </Scene>
            </Controller>
        </div>
  );
}
