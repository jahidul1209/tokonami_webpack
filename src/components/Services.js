import React from 'react';
import { Container } from 'react-bootstrap';
// import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation"  
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function Services(props) {
    return (
        <Rosa animation="fade-up" duration={800}   delay={50}>
          <Container className='service-section'>
                    <div className='whoare'>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                            <h2>_WHO ARE WE?</h2>
                     </AnimationOnScroll>
                     
                        <p>We are a team of NFT entrepreneurs, collectors, community builders, artist and developers looking to contribute to the NEAR ecosystem by creating a luxury project that brings value to its holders.</p>
                    </div>
                           <img src= '/image/Group75.png' alt="img" className="toolsimg" width='210px'/>
                   
                    <div className='whatare'>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                         <h2>_WHAT ARE WE</h2>
                     </AnimationOnScroll>
                      
                        <p>Bound to the Near Ecosystem, TOKONAMI REVOLUTION is a hand drawn, algorithmically generated NFT collection, but not just that.</p>
                         <p>Complete with staking mechanisms, upgrading and customizability, TOKONAMI REVOLUTION is a complete gamified ecosystem with a bi-token looping infrastructure yielding rewards to its holders.</p>
                    </div>
                          <img src= '/image/Group74.png' alt="img" className="veiwsimg" width='210px'/>
                   
                      <div className='gapfil'></div>
                          <img src= '/image/image11.png' alt="img" className="metaimg" width='210px'/>
                    
                    <div className='whenlaunch'>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                            <h2>_WHEN WILL WE LAUNCH</h2>
                     </AnimationOnScroll>
                      
                        <p>TOKONAMI REVOLUTION is set to launch mid-March of 2022.</p>
                    </div>
                           <img src=  '/image/Group87.png' alt="img" className="timewaitimg" width='210px'/>
                     
                    <div className='wherelaunch'>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                              <h2>_WHERE WILL WE LAUNCH</h2>
                     </AnimationOnScroll>
                       
                        <p>We are committed to the NEAR Blockchain and stand behind its goal of achieving a climate neutral architecture. We must care for our IRL ecosystem; there is no Planet B.</p>
                    </div>
            
        </Container>
        </Rosa> 
    );
}

