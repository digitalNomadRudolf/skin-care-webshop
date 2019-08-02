import React from 'react';

export default function CartColumns() {
    return (
        <div className="container">
                    <div className="row">
                      <div className="col">
                        {/* image wrap */}
                        <div className="prod-thumb">
                          <img src="https://images.unsplash.com/photo-1562887245-9d941e87344e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="small product image" class="prod-thumb-img" />
                        </div>
                        
                        {/* product info such as name and price */}
                        <div className="n-pwrap">
                         {/* name */}
                            <div className="prod-name marge-lr">
                              <span className="nametag ovo-light">honest skin creme</span>
                            </div>
                            {/* price */}
                            <div className="prod-price marge-lr">
                              <span className="pricetag ovo-big">price: $250</span>
                            </div>
                        </div>
                        {/* product quantity */}
                        <div className="prod-quantity marge-lr">
                          <button className="minus-item"><i className="fas fa-minus"></i></button>
                          <input type="number" className="item-count" value="2" />
                          <button className="plus-item"><i className="fas fa-plus"></i></button>
                        </div>
                        {/* product in trash */}
                        <div className="prod-remove marge-lr"><i className="fas fa-trash"></i></div>
                        {/* total amount */}
                        <div className="prod-total-amount marge-lr">
                          <span className="tot-amount-tag ovo-big">total: $500</span>
                        </div>

                      </div>
                    </div>
                  </div>
    )
}
