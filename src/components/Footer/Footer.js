import React, { Component } from 'react';
import styles from './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer-home">
              <div className="disclaimer">
                  <p className="ft-txt-dis">Disclaimer: this is not a real webshop - no real purchases can be made</p>
              </div>
              <div className="copy"><p className="ft-txt">Made with &hearts; by Digital Nomad Rudolf &copy; 2019</p></div>
          </footer>
        )
    }
}
