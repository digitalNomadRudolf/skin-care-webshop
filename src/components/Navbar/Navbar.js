import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hamburger from './Hamburger';
import HamburgerMenu from './Hamburger';
import Logo from './Logo';
import styled from 'styled-components';
import styles from '../../Navbar.scss';
import Cart from '../Cart/Cart';


export default class Navbar extends Component {
    
    render() {
        const { cart, activeCart, openCart, toggleCart } = this.props;
        console.log(this.props);
        return (
            <nav id="navbar">
                <Hamburger />
                    <Link to='/'>
                        <Logo />
                    </Link>

                    <div className="inCart">
                    <button className="cart" disabled={!cart.length} onClick={() => 
                    toggleCart()
                } >
                    <span className="greyCart" style={{ visibility: cart.length ? 'hidden' : 'visible' }}>the cart is empty</span>
                    <i className="fas fa-cart-arrow-down">
                        
                    </i>
                    
                </button>

                </div>

            </nav>

            
        );
    }
}
/* create styled component for a button */
const ButtonContainer = styled.button`
text-transform:capitalize;
`
