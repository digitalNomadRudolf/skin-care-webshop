import React, { Component } from 'react';
import CatSection from './CatSection';

export default class ProductTable extends Component {
    
    render() {
            // collect all the categories and store them into a const categories
            console.log(this.props)
            console.log(this.props.products)
            const categories = this.props.products.reduce((allProducts, current) => {
                return allProducts.includes(current.category) ? allProducts : allProducts.concat([current.category]);
            }, []);

            return (
                <div>
                    
                    {
                        // map through categories and category represents currently iterated category
                        categories.map((category) => {
                            // filter out the products where the category is the same as the currently iterated category, 
                            // and assign it to a const products
                            const products = this.props.products.filter(prod => prod.category === category);
                            // now render only those filtered out products
                            return (<CatSection products={products} 
                                                cart={this.props.cart}
                                                truncate={this.props.truncate}
                                                addToCart={this.props.addToCart}
                                                getProduct={this.props.getProduct}
                                                openCart={this.props.openCart}
                                                closeCart={this.props.closeCart}
                                                activeCart={this.props.activeCart}
                                                />)
                        })
                    }
                    
                </div>
            )
        
    }
}
