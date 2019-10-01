import React, { Component } from "react";
import './App.scss';
import './Navbar.scss';
import './Home.scss';
import './horiz-cont.scss';
import './product-page.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import ProductPage from './pages/ProductPage.js';
import Default from './components/Default';
import { productItems } from './data';

class App extends Component {

    constructor(props) {
      super(props);
    }

    state = {
      products: [],
      cart: [],
      detailProduct: [],
      activeCart: false,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
    }


    componentDidMount() {
      this.fetchProducts(); 
  }
  

    // create a method for fetching the products 
    fetchProducts = () => {
      let tempProds = [];
      productItems.forEach(item => {
          // product copy
          const singleItem = {...item};
          // place the product copies in the tempProds array
          tempProds = [...tempProds, singleItem];
          // shove this all into the state
          this.setState(() => {
            
              return {products: tempProds}  
          })
      })
  }


    // add items to the cart 
    addToCart = id => {
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(this.getProduct(id));
      const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;

      this.setState(() => {
          console.log("cart is opened!")
          console.log(this.state)
          return { products: [...tempProducts], 
                   cart: [...this.state.cart, product]}
          
      }, () => {
          this.calcAmounts();
          console.log(this.state)
      });
      /* {
          products: [...tempProducts], cart: [...this.state.cart, product]
      } */
  };

    

  // handleDetail method to go to product detail page
  handleDetail = (id) => {
    const product = this.getProduct(id);
    this.setState({
        detailProduct: product
    });
  };

   // get the product based on the product id
   getProduct = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
    }

    // method for opening the cart 
    openCart = id => {
      const product = this.getProduct(id);

      this.setState({
        activeCart: true,
        cart: [...this.state.cart, product]
    });

      /* this.setState(() => {
        return {cart: product, activeCart: true}
      }); */

      
  };

    // method for closing the cart 
    closeCart = id => {

      this.setState(() => {
        return {activeCart: false}
      });

      /* this.setState({
          activeCart: false
      }); */
    };

    // toggle the cart 
    toggleCart = () => {
      this.setState(prevState => ({
        activeCart: !prevState.activeCart
      }))
    };

    // increment the product count 
    increment = id => {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      product.count++;
      product.total = product.count * product.price;

      this.setState({
          cart: [...tempCart]
      }, ()=>{
          this.calcAmounts();
      });
  };


  // decrement product count
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;

        if(product.count < 1) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;

            this.setState({
                cart: [...tempCart]
            }, ()=> {
                this.calcAmounts();
            });
        };
}

// remove an item
removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getProduct(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState({
        cart: [...tempCart],
        products: [...tempProducts]
    }, ()=>{
        this.calcAmounts();
    });
};

// clear the cart 
clearCart = () => {
    this.setState({
        cart: []
    }, ()=>{
        this.fetchProducts();
        this.calcAmounts();
    });
};

// calculate the amounts
calcAmounts = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
    });
};

render() {
  return (
    <Switch>
      <Route exact path="/" /* component={Home} */ render={(routeProps) => (<Home {...routeProps}     theState={this.state}
                                                                                                      fetchProducts={this.fetchProducts}
                                                                                                      toggleCart={this.toggleCart}
                                                                                                      openCart={this.openCart}
                                                                                                      closeCart={this.closeCart}
                                                                                                      increment={this.increment}
                                                                                                      decrement={this.decrement}
                                                                                                      removeItem={this.removeItem}
                                                                                                      clearCart={this.clearCart}
                                                                                                      calcAmounts={this.calcAmounts}
                                                                                                      addToCart={this.addToCart}
                                                                                                      getProduct={this.getProduct} />)} />

      <Route path="/details" /* component={Details} */ render={(routeProps) => (<Details {...routeProps} theState={this.state}
                                                                                                         fetchProducts={this.fetchProducts}
                                                                                                         toggleCart={this.toggleCart}
                                                                                                         openCart={this.openCart}
                                                                                                         closeCart={this.closeCart}
                                                                                                         increment={this.increment}
                                                                                                         decrement={this.decrement}
                                                                                                         removeItem={this.removeItem}
                                                                                                         clearCart={this.clearCart}
                                                                                                         calcAmounts={this.calcAmounts}
                                                                                                         addToCart={this.addToCart}
                                                                                                         getProduct={this.getProduct} />)} />

      <Route path="/productpage" /* component={Product} */ render={(routeProps) => (<ProductPage {...routeProps} theState={this.state}
                                                                                                         fetchProducts={this.fetchProducts}
                                                                                                         toggleCart={this.toggleCart}
                                                                                                         openCart={this.openCart}
                                                                                                         closeCart={this.closeCart}
                                                                                                         increment={this.increment}
                                                                                                         decrement={this.decrement}
                                                                                                         removeItem={this.removeItem}
                                                                                                         clearCart={this.clearCart}
                                                                                                         calcAmounts={this.calcAmounts}
                                                                                                         addToCart={this.addToCart}
                                                                                                         getProduct={this.getProduct} />)} />
      <Route exact component={Default}/>
    </Switch>
  )
}

}

export default App;




/*
<Cart products={this.state.products}
            cart={this.state.cart}
            openCart={this.openCart}
            closeCart={this.closeCart}
            addToCart={this.addToCart}
            getProduct={this.getProduct}
            activeCart={this.state.activeCart}
            increment={this.increment}
            decrement={this.decrement}
            removeItem={this.removeItem}
            clearCart={this.clearCart}
            calcAmounts={this.calcAmounts}
            cartSubTotal={this.state.cartSubTotal}
            cartTax={this.state.cartTax}
            cartTotal={this.state.cartTotal} />

      <Switch>
        <Route exact path="/" />
        <Route path="/details" component={Details} />
        <Route path="/navbar/cart" component={Cart} />
        <Route component={Default} />
      </Switch> 
      
      import { Switch, Route } from 'react-router-dom';
      */