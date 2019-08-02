import React, { Component } from 'react';

export default class CartList extends Component {
    

    render() {

    const { increment, decrement, removeItem } = this.props;
      console.log(this.props)
      

    return (
            this.props.cart.map(cartItem => (
              <div className="row">
                      <div className="col">
                        <div className="prod-thumb">
                          <img src={cartItem.img} className="prod-thumb-img" />
                        </div>
                        <div className="n-pwrap">
                            <div className="prod-name marge-lr">
                              <span className="nametag ovo-light">{cartItem.title}</span>
                            </div>
                            <div className="prod-price marge-lr">
                              <span className="pricetag ovo-big">price: $ {cartItem.price}</span>
                            </div>
                        </div>
                        <div className="prod-quantity marge-lr">
                          <button className="minus-item" onClick={() => decrement(cartItem.id)}><i className="fas fa-minus"/></button>
                          <span className="item-count">{cartItem.count}</span>
                          <button className="plus-item" onClick={() => increment(cartItem.id)}><i className="fas fa-plus"/></button>
                        </div>
                        <div className="prod-remove marge-lr" onClick={() => removeItem(cartItem.id)}><i className="fas fa-trash" /></div>
                        <div className="prod-total-amount marge-lr">
                          <span className="tot-amount-tag ovo-big">total: $ {cartItem.total}</span>
                        </div>
                      </div>
                    </div>))
    )

    }
}
