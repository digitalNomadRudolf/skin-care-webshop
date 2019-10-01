import React, { useState, useEffect } from 'react';
import WipeAnimation from './WipeAnimation';

const ResponsiveLayout = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
        
        <WipeAnimation theState={props.theState}
                       products={props.products}
                       fetchProducts={props.fetchProducts}
                       addToCart={props.addToCart}
                       getProduct={props.getProduct}
                       openCart={props.openCart}
                       windowWidth={windowWidth}
                        />

    );
}

export default ResponsiveLayout;