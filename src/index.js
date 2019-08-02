import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { productItems } from './data';
import * as serviceWorker from './serviceWorker';
import ProductList from './components/ProductList';

ReactDOM.render(
    <Router> 
       <App  /> 
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
{/* <ProductProvider>
</ProductProvider> */}


/*
I think im almost there but i just need some help fixing this small issue. I have this same shop and i have added this cart but it wont show. I have the parent component which is App.js
App js contains the methods that handle the cart functionality. It contains the Cart component as well and i have added the props. I have added a lot
of props and dont know if this is actually correct. What should happen is when the cart icon in the navbar is clicked, the button is enabled and when
clicked, it will open up the cart with the items inside. if empty its disabled. When i click on the icon however, it says this.state.cart.map is not a function.
The same thing happens when i click on the product cart on the product itself (the button next to the discover button). 
TO be honest i think i passed a lot of props and now it confused me a bit. i defined a lot but somehow missed some things and the question is where? 
Could you take a look at it for  me? 

Cheers





*/