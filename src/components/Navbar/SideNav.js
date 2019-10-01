import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Navbar.scss';

export default class SideNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    show = () => {
        this.setState({ visible: true });
        document.addEventListener("click", this.hide);
    }

    hide = () => {
        document.removeEventListener("click", this.hide);
        this.setState({ visible: false });
    }

    render() {
        return (
            <div id="sideNav" className={"sidenav " + (this.state.visible ? "visible" : "")}>
                    <a href="javascript:void(0)" className="closebtn">&times;</a>
                    <Link to="/details">Cellulite</Link>
                    <Link to="/details">Anti Aging</Link>
                    <Link to="/details">Smooth Skin</Link>
                    <Link to="/details">Stretch Cream</Link>
                </div>
        )
    }
}
