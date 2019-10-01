import React, { useState } from 'react';

export default function SmallDetails(props) {
    const {products} = props
    const [state] = useState(props.products);
    return (
            <section id="pinContainer">
                <div id="slideContainer">
                    <section id="section-slides">
                    {products.filter(product => product.id < 5).map(product => ( 
                                    
                                    <div
                                        className={`panel ${product.id == 1 ? 'blue' :
                                                            product.id == 2 ? 'turqoise' :
                                                            product.id == 3 ? 'green' : 
                                                            product.id == 4 ? 'bordeaux' : '' }`}
                                        key={product.id}
                                    >
                                    <div class="right-box">
                                        <h1>{product.title}</h1>
                                        <p>{product.info}</p>
                                        <a href="#" className="btn btn-dark secondary-button">Read More</a>
                                        <div className="toCart-btn"><span class="addCart">add to cart</span> <i className="fas fa-shopping-cart"></i></div>
                                    </div>
                                      <div />
                                      </div>
                                ))}
                    </section>
                </div>
            </section>
        
    )
}
