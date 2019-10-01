import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default class WipeAnimation extends Component {
    constructor(props) {
        super(props);

        this.tl = new TimelineMax();
        this.controller = new ScrollMagic.Controller();
    }

    componentDidMount() {

        this.tl
        .to(this.slideContainer, 0.5, {z: -150})		
        .to(this.slideContainer, 1,   {x: "-25%"})	
        .to(this.slideContainer, 0.5, {z: 0})				
        // animate to third panel
        .to(this.slideContainer, 0.5, {z: -150, delay: 1})
        .to(this.slideContainer, 1,   {x: "-50%"})
        .to(this.slideContainer, 0.5, {z: 0})
        // animate to forth panel
        .to(this.slideContainer, 0.5, {z: -150, delay: 1})
        .to(this.slideContainer, 1,   {x: "-75%"})
        .to(this.slideContainer, 0.5, {z: 0})
        // animate to fifth
        .to(this.slideContainer, 0.5, {z: -150, delay: 1})
        .to(this.slideContainer, 1,   {x: "-75%"})
        .to(this.slideContainer, 0.5, {z: 0});

       let newScene = new ScrollMagic.Scene({
            triggerElement: '#pinContainer',
            triggerHook: "onLeave",
            duration: '700%'
        })
            .setTween(this.tl)
            .setPin('#pinContainer')
            .addTo(this.controller);

        

        window.addEventListener('resize', () => {
            console.log(document.documentElement.clientWidth);
            if(document.documentElement.clientWidth <= 621) {
                newScene.removeTween(newScene);
                newScene.removePin('#pinContainer')
            } else if (document.documentElement.clientWidth > 621) {
                newScene.setTween(this.tl)
                newScene.setPin('#pinContainer')
                newScene.addTo(this.controller);
            }
        });
        
            // this solution also did not work properly because the width did not update as it should everytime the maximize button was clicked. 
            // the width was still the same! only on refresh it worked. Then i found document.documentElement.clientWidth. 
            // this solved the issue nicely.

            /* window.addEventListener('resize', () => {
                console.log(document.documentElement.clientWidth);
                console.log(this.props.windowWidth);
                if(this.props.windowWidth <= 621) {
                    newScene.removeTween(newScene);
                    newScene.removePin('#pinContainer')
                } else if (this.props.windowWidth > 621) {
                    newScene.setTween(this.tl)
                    newScene.setPin('#pinContainer')
                    newScene.addTo(this.controller);
                    this.controller.update(true);
                }
            }); */
        
            // I keep this below code because its pretty cool, unfortunately the result was glitchy and buggy so i found a better solution.
            /* window.addEventListener('resize', () => {
                if(this.props.windowWidth < 621 && this.controller.enabled()) {
                    this.controller.enabled(false);

                } else if (this.props.windowWidth > 621 && !this.controller.enabled()) {
                    this.controller.enabled(true);
                } else {
                    this.controller.enabled(false);
                }
                this.controller.update(true);
            }); */
    }

    /* componentWillUnmount() {
        window.removeEventListener('resize');
    } */

    render() {
    console.log(this.props)
    const {products, addToCart, openCart} = this.props;
    

    return (

                    <section id="pinContainer">
                                <div 
                                    id="slideContainer" ref={div => (this.slideContainer = div)}
                                >
                                <section id="section-slides">
                                {products.filter(product => product.id < 5).map(product => ( 
                                    
                                    <div
                                        className={`panel ${product.id == 1 ? 'blue' :
                                                            product.id == 2 ? 'turqoise' :
                                                            product.id == 3 ? 'green' : 
                                                            product.id == 4 ? 'bordeaux' : '' }`}
                                        key={product.id}
                                    >
                                    <div className="right-box">
                                        <h1>{product.title}</h1>
                                        <p>{product.info}</p>
                                        <Link to={{
                                            pathname: '/productpage/',
                                            state: { product }
                                        }}>
                                        <a href="#" className="btn btn-dark secondary-button">Read More</a>
                                        </Link>
                                        {/* <div className={product.inCart ? "in-cart-class" : "add-to-cart"}> */}
                                        <button className={product.inCart ? "toCart-btn-none" : "toCart-btn"} disabled={product.inCart ? true : false} onClick={() => {
                                            addToCart(product.id);
                                            openCart(product.id);
                                        }}>
                                                {!product.inCart ? (
                                                <div>
                                                <span className="addCart">add to cart </span> 
                                                <i className="fas fa-shopping-cart"></i>
                                                </div> )
                                                :
                                       ( <span>Item in Cart</span> )}
                                        </button>
                                        {/* </div> */}
                                    </div>
                                      <div />
                                      </div>
                                ))}
                                 </section>
                                </div>
                        </section>
        
    )
        }
    }
