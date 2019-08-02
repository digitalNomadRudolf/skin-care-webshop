import React from 'react';
import ProductList from './ProductList';
import { productItems } from '../data';

export const myProductList = (props) => {
    console.log(props)
    return (
        <ProductList {...props} products={productItems} />
    );
}


