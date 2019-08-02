/* import React, { Component } from 'react';

// create new context object
const ProductContext = React.createContext();

// set the provider which provides all the app info
class ProductProvider extends Component {

    

    // render the ProductContext provider
    render() {
        return (
            <ProductContext.Provider value={{
                // this will contain all the state and its values, and all of the methods defined here in the context
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openCart: this.openCart,
                closeCart: this.closeCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                subStrAfterChars: this.subStrAfterChars,
                togglePin: this.togglePin,
                updateDimensions: this.updateDimensions
            }}>

                {/* return the app children *///}
                /* {this.props.children}
            </ProductContext.Provider>  */
    //    )
  //  }
//}



// set the product consumer
//const ProductConsumer = ProductContext.Consumer;
// export the product provider and consumer
//export { ProductProvider, ProductConsumer };
/* */








/*
state = {
    products: [],
    cart: [],
    detailProduct: {},
    activeCart: false,
    cartProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    height: window.innerHeight,
    width: window.innerWidth,
    togglePin: this.togglePin
};

componentDidMount() {
    this.fetchProducts();
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

// create a method for fetching the products 
fetchProducts = () => {
    let tempProds = [];
    productItems.map(item => {
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

handleDetail = (id) => {
    const product = this.getProduct(id);
    this.setState({
        detailProduct: product
    });
};

// get a single product based on the product id
getProduct = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
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
        return { products: [...tempProducts], cart: [...this.state.cart, product] }
    }, () => {
        this.calcAmounts();
    });
    /* {
        products: [...tempProducts], cart: [...this.state.cart, product]
    } */
/*};

/*

// method for opening the cart 
openCart = id => {
    const product = this.getProduct(id);

    this.setState({
        cartProduct: product, activeCart: true
    });
};

// method for closing the cart 
closeCart = id => {
    this.setState({
        activeCart: false
    });
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

componentWillUnmount() {
    window.addEventListener("resize", this.updateDimensions);
  }
*/