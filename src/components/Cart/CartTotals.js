import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CartTotals extends Component {

    render() {

    const { cart, clearCart, calcAmounts, closeCart, cartSubTotal, cartTax, cartTotal } = this.props;
    console.log(this.props)
    return (
        
        <div className="flex-wrapper">

                    <div className="cta-buttons">
                      <div className="keep-shopping" >
                      <Link to="/">
                        <button className="minimum-w pink-btn" onClick={() => closeCart()}><span className="black">keep shopping</span></button>
                      </Link>
                      </div>
  
                      <div className="clear-cart-btn">
                          <button className=" minimum-w clear-cart brown-btn">
                            <span className="white" onClick={() => clearCart()}>clear cart</span>
                          </button>
                      </div>
  
                    </div>

                    <div className="calculations">
                        <div className="prod-subtotal">
                          <span className="subt">Subtotal:</span> <span className="amount">$ {cartSubTotal}</span>
                        </div>
                        <div className="prod-tax">
                          <span className="ptax">Tax:</span> <span className="amount">$ {cartTax}</span>
                        </div>
                        <div className="total-amount">
                          <span className="totam">Total:</span> <span className="amount">$ {cartTotal}</span>
                        </div>
                        <div className="paypal-checkout-btn">
                          <span className="payp-check">Checkout:</span> <i className="fab fa-cc-paypal"></i>
                        </div>
                    </div>

        </div>
    )
    }
}
