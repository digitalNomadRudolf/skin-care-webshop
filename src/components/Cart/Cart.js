import React, { Component } from 'react';
import CartTitle from './CartTitle';
import styles from '../../shopcart.scss';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    
    render() {
        
        const { cart, activeCart } = this.props;
        
        if(!activeCart) {
            return null;

        } else {
        return (
            
            <div className="cart-modal">
                    <CartTitle title="Cart" />
                <div className="container">
                    <CartList cart={this.props.cart} 
                              increment={this.props.increment} 
                              decrement={this.props.decrement}
                              removeItem={this.props.removeItem} />
                    <CartTotals cart={this.props.cart}
                                clearCart={this.props.clearCart}
                                calcAmounts={this.props.calcAmounts}
                                cartSubTotal={this.props.cartSubTotal}
                                cartTax={this.props.cartTax}
                                cartTotal={this.props.cartTotal} />
                                
                </div>
            </div> 
            );
        }

    }
}

