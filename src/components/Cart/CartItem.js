import React from 'react';

export default function CartColumns({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="container">
                    <div className="row">
                      <div className="col">
                        {/* image wrap */}
                        <div className="prod-thumb">
                          <img src={img} className="prod-thumb-img" />
                        </div>
                        
                        {/* product info such as name and price */}
                        <div className="n-pwrap">
                         {/* name */}
                            <div className="prod-name marge-lr">
                              <span className="nametag ovo-light">{title}</span>
                            </div>
                            {/* price */}
                            <div className="prod-price marge-lr">
                              <span className="pricetag ovo-big">price: $ {price}</span>
                            </div>
                        </div>
                        {/* product quantity */}
                        <div className="prod-quantity marge-lr">
                          <button className="minus-item" onClick={()=> decrement(id)}><i className="fas fa-minus"></i></button>
                         
                          <span className="item-count">{count}</span>
                          <button className="plus-item" onClick={()=> increment(id)}><i className="fas fa-plus"></i></button>
                        </div>
                        {/* product in trash */}
                        <div className="prod-remove marge-lr" onClick={()=> removeItem(id)}><i className="fas fa-trash"></i></div>
                        {/* total amount */}
                        <div className="prod-total-amount marge-lr">
                          <span className="tot-amount-tag ovo-big">total: $ {total}</span>
                        </div>

                      </div>
                    </div>
                  </div>
    )
}
