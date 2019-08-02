import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div class="cart-modal">

                    <div class="cart-modal-title">
                        <h1>Cart</h1>
                      </div>
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        {/* image wrap */}
                        <div class="prod-thumb">
                          <img src="https://images.unsplash.com/photo-1562887245-9d941e87344e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="small product image" class="prod-thumb-img">
                        </div>
                        
                        {/* product info such as name and price */}
                        <div class="n-pwrap">
                         {/* name */}
                            <div class="prod-name marge-lr">
                              <span class="nametag ovo-light">honest skin creme</span>
                            </div>
                            {/* price */}
                            <div class="prod-price marge-lr">
                              <span class="pricetag ovo-big">price: $250</span>
                            </div>
                        </div>
                        {/* product quantity */}
                        <div class="prod-quantity marge-lr">
                          <button class="minus-item"><i class="fas fa-minus"></i></button>
                          <input type="number" class="item-count" value="2">
                          <button class="plus-item"><i class="fas fa-plus"></i></button>
                        </div>
                        {/* product in trash */}
                        <div class="prod-remove marge-lr"><i class="fas fa-trash"></i></div>
                        {/* total amount */}
                        <div class="prod-total-amount marge-lr">
                          <span class="tot-amount-tag ovo-big">total: $500</span>
                        </div>

                      </div>
                    </div>

                      <div class="row">
                      <div class="col">
                          <div class="prod-thumb">
                            <img src="https://images.pexels.com/photos/1927612/pexels-photo-1927612.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="small product image" class="prod-thumb-img">
                          </div>
                          <div class="n-pwrap">
                              <div class="prod-name marge-lr">
                                <span class="nametag ovo-light">purple skin powder</span>
                              </div>
                              <div class="prod-price marge-lr">
                                <span class="pricetag ovo-big">price: $400</span>
                              </div>
                          </div>
                          <div class="prod-quantity marge-lr">
                            <button class="minus-item"><i class="fas fa-minus"></i></button>
                            <input type="number" class="item-count" value="1">
                            <button class="plus-item"><i class="fas fa-plus"></i></button>
                          </div>
                          <div class="prod-remove marge-lr"><i class="fas fa-trash"></i></div>
                          <div class="prod-total-amount marge-lr">
                            <span class="tot-amount-tag ovo-big">total: $400</span>
                          </div>
                        </div>

                    </div>

                    <div class="flex-wrapper">

                    <div class="cta-buttons">
                      <div class="keep-shopping" >
                        <button class="minimum-w pink-btn"><span class="black">keep shopping</span></button>
                      </div>
  
                      <div class="clear-cart-btn">
                          <button class=" minimum-w clear-cart brown-btn">
                            <span class="white">clear cart</span>
                          </button>
                      </div>
  
                    </div>

                    <div class="calculations">
                        <div class="prod-subtotal">
                          <span class="subt">Subtotal:</span> <span class="amount">$900</span>
                        </div>
                        <div class="prod-tax">
                          <span class="ptax">Tax:</span> <span class="amount">$20.5</span>
                        </div>
                        <div class="total-amount">
                          <span class="totam">Total:</span> <span class="amount">$920.5</span>
                        </div>
                        <div class="paypal-checkout-btn">
                          <span class="payp-check">Checkout:</span> <i class="fab fa-cc-paypal"></i>
                        </div>
                    </div>

                    </div>
                  </div>
                  
                </div> 
            </div>
        </div>
        )
    }
}
