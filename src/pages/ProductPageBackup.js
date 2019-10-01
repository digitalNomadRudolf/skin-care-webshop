import React from 'react';
import {Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import CartTitle from '../components/Cart/CartTitle';
import CartList from '../components/Cart/CartList';
import CartTotals from '../components/Cart/CartTotals';
import Footer from '../components/Footer/Footer';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);



export default function ProductPage(props) {

    console.log(props)
    const { openCart, addToCart } = props;
    const { cart } = props.theState;
    // iterate through the cart array inside props.theState and if any of the ids are the same as the current product id then disable the button
    // and change the text
    // if cart has items in it and has an id equal to the id inside props.location.state.product
    
    if(props.location.state === undefined) {
       return <Redirect to={{
            pathname: '/',
        }} />;
    }
    const { product } = props.location.state;

   
    console.log(product)
    console.log(product.inCart)
    
    return (

        <React.Fragment>
            <Navbar cart={props.theState.cart}
                activeCart={props.theState.activeCart}
                toggleCart={props.toggleCart}
                openCart={props.openCart}
                closeCart={props.closeCart}
                increment={props.increment}
                decrement={props.decrement}
                removeItem={props.removeItem}
                clearCart={props.clearCart}
                calcAmounts={props.calcAmounts}
                cartSubTotal={props.theState.cartSubTotal}
                cartTax={props.theState.cartTax}
                cartTotal={props.theState.cartTotal} />

            
<div id="wrapper" className="product-page-bg">

<section className="main-head">
    <div className="product-title-row">
        <div className="product-title-wrap">
            <div className="product-title-box">
                <h1 className="heading">
                    {product.title}
                </h1>
                    <p className="prod-title-txt">{product.info}</p>
                <button className="heading-cta" 
                // go through the cart, and if it contains an item with the same id as the current product, disable the button
                // the some array method returns either true or false
                    disabled={cart.some(item => item.id === product.id)}
                    onClick={() => {
                    addToCart(product.id);
                    openCart(product.id);
                }}>
                 
                    {!cart.length || cart.length && cart.every(item => item.id !== product.id) ? (
                        <div>
                            <span className="addCart">add to cart </span> 
                            <i className="fas fa-shopping-cart"></i>
                        </div> )
                            : 
                    ( <span>Item in Cart</span> )}
                    
                </button>
            </div>

            <div class="image-section" style={{ backgroundImage: `url(${product.img})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat' }}>

            </div>
        </div>
    </div>
</section>

<section class="more-info">
    <div class="prod-info-row">
        <div class="prod-info-wrap">
            <div class="row">
                <div class="col-4 left-col">
                    <h1 class="descr fade-in">
                        {product.company}
                    </h1>
                
                </div>

                <div class="col-4 mid-col fade-x-axis">
                    <div class="mid-img" style={{ backgroundImage: `url(${product.img2})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat' }}></div>
                </div>

                <div class="col-4 right-col">
                        <p class="small-descr fade-in">{product.info}</p>
                    </div>
            </div>
        </div>
    </div>
</section>

<section class="newsletter-sign">
    <div class="newsletter-sign-row">
    <div class="news-sign-wrap">
        <h1 class="news fade-in">Why buy with us?</h1>
        <p class="sign-descr fade-x-axis">signup up for our newsletter and claim these benefits</p>
        <div class="row xtr-m-top">
            <div class="col-6 usp-left">
                <div class="fontaw-icon fade-in">
                    <i class="fas fa-gift"></i>
                </div>
                <h2 class="ups-title fade-in">gift voucher</h2>
                <p class="usp-text fade-x-axis">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, at obcaecati!</p>
            </div>
            <div class="col-6 usp-right">
                <div class="fontaw-icon fade-in">
                        <i class="fas fa-tags"></i>
                </div>
                <h2 class="ups-title fade-in">big discounts</h2>
                <p class="usp-text fade-x-axis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae nisi maiores obcaecati.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-6 usp-left">
                <div class="fontaw-icon fade-in">
                    <i class="fas fa-shipping-fast"></i>
                </div>
                <h2 class="ups-title fade-x-axis">next day delivery</h2>
                <p class="usp-text fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum quod perspiciatis!</p>
            </div>
            <div class="col-6 usp-right">
                <div class="fontaw-icon fade-in">
                    <i class="fab fa-paypal"></i>
                </div>
                <h2 class="ups-title fade-x-axis">easy payment</h2>
                <p class="usp-text fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et.</p>
            </div>
        </div>

            {/* <button class="news-cta fade-x-axis">add to Cart</button> */}
        </div>
    </div>
{/* </div> */}
</section>


</div> 


            {/* show cart logic */}
         {props.theState.activeCart &&
              
              <div className="cart-modal">
                      <CartTitle title="Cart" />
                  <div className="container">
                      <CartList cart={props.theState.cart} 
                                increment={props.increment} 
                                decrement={props.decrement}
                                removeItem={props.removeItem} />
                      <CartTotals cart={props.theState.cart}
                                  closeCart={props.closeCart}
                                  clearCart={props.clearCart}
                                  calcAmounts={props.calcAmounts}
                                  cartSubTotal={props.theState.cartSubTotal}
                                  cartTax={props.theState.cartTax}
                                  cartTotal={props.theState.cartTotal} />
                                  
                  </div>
              </div> 
            }
        <Footer />
        </React.Fragment>
    )
}
