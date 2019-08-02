import React, { Component } from 'react';
import styles from '../Home.scss';
import {productItems} from '../data';
import ProductTable from './ProductTable';
import { Controller, Scene } from 'react-scrollmagic';


export default class ProductList extends Component {

    constructor(props) {
        super(props);
    }


    state = {
        height: window.innerHeight,
        width: window.innerWidth,
        togglePin: this.togglePin
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);  
    }

    // truncate string method
    subStrAfterChars = (str, char, pos) => {
        if (pos == 'b') {
            return str.substring(str.indexOf(char) + 1);
        } else if (pos == 'a') {
            return str.substring(0, str.indexOf(char));
        } else {
            return str;
        }
    }

    // toggle the scrollmagic pin 
    togglePin = () => {
        if (this.state.width >= 1005 && this.state.height >= 580) {
            this.setState({togglePin: true})
        } else if (this.state.width < 1005 || this.state.height < 580) {
            this.setState({togglePin: false})
        }
    }

    // set the dimensions of the page
    updateDimensions = () => {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }


    componentWillUnmount() {
        window.addEventListener("resize", this.updateDimensions);
      }

    render() {
        
        return (
            <React.Fragment>
            <div id="wrapper">
                <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                    <Scene pin>
                        
                        <ProductTable products={this.props.products} 
                                      truncate={this.subStrAfterChars}
                                      cart={this.props.cart}
                                      addToCart={this.props.addToCart}
                                      getProduct={this.props.getProduct}
                                      openCart={this.props.openCart}
                                      closeCart={this.props.closeCart}
                                      activeCart={this.props.activeCart}
                                      increment={this.props.increment}
                                      decrement={this.props.decrement}
                                      removeItem={this.props.removeItem}
                                      clearCart={this.props.clearCart}
                                      calcAmounts={this.props.calcAmounts}
                                      cartSubTotal={this.props.cartSubTotal}
                                      cartTax={this.props.cartTax}
                                      cartTotal={this.props.cartTotal}/>
                        
                        
                     </Scene>
                </Controller>
            </div>

            </React.Fragment>
        )
      }
      
}

