import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


const SlideContainer = (props) => {

    const {products} = props;
    const [state] = useState(props.products);

    /* const tweenpercentage = 100 - 100 / state.sections.length; */
    const tweenpercentage = 100 - 100 / products.length;
        
    return (
        
        <Controller>
            <Scene triggerHook="onLeave" duration={1400} pin>
                {progress => (
                    <section id="pinContainer">
                        <Timeline totalProgress={progress} paused>
                            <Tween from={{ x: '0%' }} to={{ x: '-' + tweenpercentage + '%' }}>
                                <div 
                                    id="slideContainer"
                                >
                                <section id="section-slides">
                                {/* state.sections.map(section => ( */}
                                {products.filter(product => product.id < 5).map(product => ( 
                                    
                                    <div
                                        className={`panel ${product.id == 1 ? 'blue' :
                                                            product.id == 2 ? 'turqoise' :
                                                            product.id == 3 ? 'green' : 
                                                            product.id == 4 ? 'bordeaux' : '' }`}
                                        key={product.id}
                                    >
                                    <div class="right-box">
                                        <h1>{product.title}</h1>
                                        <p>{product.info}</p>
                                        <a href="#" className="btn btn-dark secondary-button">Read More</a>
                                        <div className="toCart-btn"><span class="addCart">add to cart</span> <i className="fas fa-shopping-cart"></i></div>
                                    </div>
                                      <div />
                                      </div>
                                ))}
                                 </section>
                                </div>
                            </Tween>
                            
                        </Timeline>
                        
                        </section>
                        )}
                
            </Scene>
        </Controller>
        
    )
}
export default SlideContainer;