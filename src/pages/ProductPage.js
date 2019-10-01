import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import CartTitle from '../components/Cart/CartTitle';
import CartList from '../components/Cart/CartList';
import CartTotals from '../components/Cart/CartTotals';
import Footer from '../components/Footer/Footer';
import * as ScrollMagic from "scrollmagic";
import { controller } from "scrollmagic";
import { TweenMax, TimelineMax, Expo } from "gsap"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, Expo);


export default class ProductPage extends Component {
        constructor(props) {
            super(props);

            this.Controller = new ScrollMagic.Controller();
        }

        fadeInTween = () => {
            let tween = TweenMax.from('.fade-in', 1, {delay: 1, autoAlpha: 0, opacity: 0, y: '+=20', ease:Expo.easeInOut});
            new ScrollMagic.Scene({
                triggerElement: '.fade-in',
                triggerHook: 0.75,
                reverse: false
            })
            .setTween(tween) // trigger a TweenMax.to tween
            .addTo(this.Controller);
        }

        fadeInX = () => {
            let tween = TweenMax.from('.fade-x-axis', 1.3, {autoAlpha: 0, opacity: 0, x: '+=20', ease:Expo.easeInOut});
            new ScrollMagic.Scene({
                triggerElement: '.fade-x-axis',
                triggerHook: 0.75,
                reverse: false
            })
            .setTween(tween) // trigger a TweenMax.to tween
            .addTo(this.Controller);
        }

        fadeInMiddle = () => {
            let tween = TweenMax.from('.fade-in-mid', 1.8, {autoAlpha: 0, opacity: 0, y: '+=20', ease:Expo.easeInOut});
            new ScrollMagic.Scene({
                triggerElement: '.fade-in-mid',
                triggerHook: 0.75,
                reverse: false
            })
            .setTween(tween) // trigger a TweenMax.to tween
            .addTo(this.Controller);
        }

        tweenAnims = () => {
            TweenMax.from("h1.heading", 1.5, { delay: .5, y: 20, opacity: 0, ease: Expo.easeInOut });
            TweenMax.from(".prod-title-txt", 1.5, { delay: .1, y: 20, opacity: 0, ease: Expo.easeInOut });
            TweenMax.from("button.heading-cta", 1.5, { delay: .4, y: 20, opacity: 0, ease: Expo.easeInOut });
            TweenMax.from(".image-section", 2, { delay: .4, y: 20, opacity: 0, ease: Expo.easeInOut });
        }

        componentDidMount() {

            this.fadeInTween();
            this.fadeInX();
            this.fadeInMiddle();
            this.tweenAnims();
        }
       
        render() {
            console.log(this.props)
            const { openCart, addToCart } = this.props;
            if(this.props.location.state === undefined) {
                return <Redirect to={{
                     pathname: '/',
                 }} />;
             }
            
            const { cart } = this.props.theState;
            const { product } = this.props.location.state;
           
        return (
            <React.Fragment>
            <Navbar cart={this.props.theState.cart}
                activeCart={this.props.theState.activeCart}
                toggleCart={this.props.toggleCart}
                openCart={this.props.openCart}
                closeCart={this.props.closeCart}
                increment={this.props.increment}
                decrement={this.props.decrement}
                removeItem={this.props.removeItem}
                clearCart={this.props.clearCart}
                calcAmounts={this.props.calcAmounts}
                cartSubTotal={this.props.theState.cartSubTotal}
                cartTax={this.props.theState.cartTax}
                cartTotal={this.props.theState.cartTotal} />

            
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
                    <h1 class="descr fade-in-mid">
                        {product.company}
                    </h1>
                
                </div>

                <div class="col-4 mid-col fade-x-axis">
                    <div class="mid-img" style={{ backgroundImage: `url(${product.img2})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat' }}></div>
                </div>

                <div class="col-4 right-col">
                        <p class="small-descr fade-in-mid">{product.info}</p>
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
         {this.props.theState.activeCart &&
              
              <div className="cart-modal">
                      <CartTitle title="Cart" />
                  <div className="container">
                      <CartList cart={this.props.theState.cart} 
                                increment={this.props.increment} 
                                decrement={this.props.decrement}
                                removeItem={this.props.removeItem} />
                      <CartTotals cart={this.props.theState.cart}
                                  closeCart={this.props.closeCart}
                                  clearCart={this.props.clearCart}
                                  calcAmounts={this.props.calcAmounts}
                                  cartSubTotal={this.props.theState.cartSubTotal}
                                  cartTax={this.props.theState.cartTax}
                                  cartTotal={this.props.theState.cartTotal} />
                                  
                  </div>
              </div> 
            }
        <Footer />
        </React.Fragment>
           );
      }
}
