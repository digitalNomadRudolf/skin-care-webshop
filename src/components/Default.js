import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Footer from './Footer/Footer';

export default class Default extends Component {
    render() {
        return (
            <Redirect to="/" />
        )
    }
}
