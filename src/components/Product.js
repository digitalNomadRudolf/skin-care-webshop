import React from 'react';
import {Link} from 'react-router-dom';
import Cart from './Cart/Cart';


export default function Product(props) {
   const { cart, product, truncate, activeCart, addToCart, openCart, closeCart } = props;
   console.log(product.img)

   return (
        <div className="col-4">
            <div className="item-wrap">
                <div className="home-prod-img-wrap">
                    <img src={product.img} alt="product" className="home-prod-img" />
                </div>

                <div className="home-prod-title">
                    <h1>{product.title}</h1>
                    <div className="caption">
                        <p>{truncate(product.info, '...', 'a')}</p>
                    </div>
                </div>

                <div className="home-prod-buttons">
                    <div className="read-more">
                        <Link to="/details">
                        <button className="read-more--link">
                          discover
                          </button>
                        </Link>
                    </div>
                    <div className={product.inCart ? "in-cart-class" : "add-to-cart"}>
                        <button className="add-to-cart--link" 
                                disabled={product.inCart ? true : false} 
                                onClick={() => {
                                    addToCart(product.id);
                                    openCart(product.id);
                                }}>
                                  {product.inCart ? (
                                    <span>inCart</span>
                                  ) : (
                                    <i className="fas fa-shopping-cart" />
                                  )}
                                  
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



































/* import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Title from './Title';
import styles from '../Home.scss';
import {ProductConsumer} from '../Context';

export default class Product extends Component {
    render() {
      
        return (

                <ProductConsumer>
                  {value => {
                    const { id, title, img, info, inCart } = value;
                    return (
                <div className="col-4">
                    <div className="item-wrap">
                    <div className="home-prod-img-wrap" onClick={() => value.handleDetail(id)}>
                      <Link to="/">
                    <img src={img} alt="product" className="home-prod-img" />
                     </Link>
                    </div>
                    <div className="home-prod-title">
                      <h1>{title}</h1>
                    <div className="caption">
                      <p>{info}</p>
                    </div>
                  </div>

                  <div className="home-prod-buttons">
                    <div className="read-more">
                      <a href="sub.html" className="read-more--link">discover</a>
                    </div>
                    <div className="add-to-cart">
                      <button href="#" className="add-to-cart--link" disabled={inCart ? true : false} onClick={() => {
                        value.addToCart(id)
                        value.openCart(id)
                      }}>
                          {inCart ? (<p disabled>in cart</p>) : (<i className="fas fa-shopping-cart" />)}
                      </button>
                    </div>
                  </div>
                    
                    </div>
                    
                  </div>
                    );
                  }}
                  </ProductConsumer>
        )
    }
}


 */