import React, { Component } from 'react';
import SideNav from './SideNav';
import styles from '../../Navbar.scss';
import styled from 'styled-components';

export default class Hamburger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    toggleMenu = () => {
        this.refs.menu.show()
    }

    render() {
        return (
            <HamburgerMenu>
            <span className="hamburger" onClick={this.toggleMenu}>&#9776;</span>
            <SideNav ref="menu" />
            </HamburgerMenu>
            
        )
    }
}

export const HamburgerMenu = styled.button`
font-size: 2em;
cursor:pointer;
border: 0;
background: transparent;
`;