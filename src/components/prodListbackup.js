import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import styles from '../Home.scss';
import productCats from '../data';
import { Controller, Scene } from 'react-scrollmagic';
import { ProductConsumer} from '../Context';


// Fetching the products. 2 main things need to be done here: Fetching the products and using the ScrollMagic animations
// 4 product categories. each category lists 3 products on the homepage. This productList is the main page. 
// search the storeProducts array in data.js / iterate through it and if the category 
// first create 4 categories in the storeProducts array. 3 items in each category.  iterate through the array
// if the category has objects (or is not equal to null or length is not < 1) 
// then list them on the page. in a maximum amount of 3 items. 
// if storeProducts has property, check if that property has a product with an id
// then filter out the lowest id products in ascending order if the category name is the same as the property name the product
// is sitting in. 
// if the category is equal to "category string" then add the respective className in the section


const maxIntroLength = 85;

export default class ProductList extends Component {

    render() {
        /* const {id, title, img, price, inCart} = this.props.product; */
        return Object.keys(productCats).map((cat, idx) => (
            <Controller key={idx} globalSceneOptions={{ triggerHook: 'onLeave' }} >
            <Scene >
            
            <section key={idx} className={"product " + (idx === 0 ? "first" : 
                                                        idx === 1 ? "second":
                                                        idx === 2 ? "third" :
                                                        idx === 3 ? "fourth": "")}>
                
                
                <div className="main-title">
                    <h1>{cat}</h1>
                </div>
                
                <div className="container product-container"> 
                    <div className="row"> 
                    
            {productCats[cat].map((ord, idx) => (
                        <div key={idx} className="col-4">
                            <div className="item-wrap">
                                <div className="home-prod-img-wrap">
                                    <img src={ord.img} alt="product image" className="home-prod-img" />
                                </div>
                            

                            <div className="home-prod-title">
                                <h1>{ord.title}</h1>
                            <div className="caption">
                                {ord.info.length > maxIntroLength ?
                                    (
                                        <p>
                                            {`${this.context.subStrAfterChars(ord.info, '...', 'a')}`}
                                        </p>
                                    ) : 
                                    <p>{ord.info}</p>
                            }
                            </div>
                            </div>

                            <ProductConsumer>
                                {value => {
                                    return ( 
                            <div className="home-prod-buttons">
                                <div className="read-more">
                                    <a href="sub.html" onClick={() => value.handleDetail(ord.id)} className="read-more--link">discover</a>
                                </div>
                                <div className="add-to-cart">
                                    <button className="add-to-cart--link" disabled={ord.inCart ? true : false} onClick={() => {
                                         value.addToCart(ord.id)
                                        ord.openCart(ord.id) 
                                        console.log(value)
                                        console.log(value.props)
                                        console.log(ord)
                                        
                                    }}>
                                        {ord.inCart ? (<p className="text-capitalize" disabled>
                                            in cart
                                        </p>) : (<i className="fas fa-shopping-cart" />) }
                                    </button>
                                    </div>
                                </div>
                                     );
                                }}
                            </ProductConsumer> 
                            </div>
                        </div>
            ))}
            </div>  
                </div>
          </section>
          </Scene>
            </Controller>
        ))
      }
      componentWillUnmount() {
        window.addEventListener("resize", this.updateDimensions);
      }
}




