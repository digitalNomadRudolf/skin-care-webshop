import React, { Component } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import ResponsiveLayout from '../components/ResponsiveLayout';
import Navbar from '../components/Navbar/Navbar';
import CartTitle from '../components/Cart/CartTitle';
import CartList from '../components/Cart/CartList';
import CartTotals from '../components/Cart/CartTotals';
import Footer from '../components/Footer/Footer';
import { productItems } from '../data';


export default class Details extends Component {

    constructor(props) {
        super(props);

}

    state = {
        height: window.innerHeight,
        width: window.innerWidth,
    }
    
    /* fetchProducts = () => {
        let tempProds = [];
        productItems.forEach(item => {
            // product copy
            const singleItem = {...item};
            // place the product copies in the tempProds array
            tempProds = [...tempProds, singleItem];
            // shove this all into the state
            this.setState({
              products: [...tempProds]
            })
        })
    } */
    
    componentDidMount() {
       this.props.fetchProducts();
       document.body.classList.add('sub-bg');
    }


    
    render() {
        console.log(this.props)
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
           {/* iterate through the productItems JSON data, each iterated over item goes into a panel where each one receives a different class based on the 
           panel. First blue, second turqoise, third green and fourth bordeaux. The animation is a wipe animation (TimelineMax)
           Work with a count maybe because only 4 products can be pulled. as long as count is below for keep iterating. There is the 
           standard cart functionality that is also on the home page. The read more button links to the product page using Link */}
        
        <div id="wrapper">
            <div className="row">


                                <ResponsiveLayout theState={this.props.theState}
                                                  products={this.props.theState.products}
                                                  fetchProducts={this.props.fetchProducts}
                                                  addToCart={this.props.addToCart}
                                                  openCart={this.props.openCart}
                                                  getProduct={this.props.getProduct}
                                                  />
                
               
            </div>
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
        )
    }
}