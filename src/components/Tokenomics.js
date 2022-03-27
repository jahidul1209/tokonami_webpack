import React from 'react';
import { Container,Col, Row } from 'react-bootstrap';
// import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation" ;
import { AnimationOnScroll } from 'react-animation-on-scroll';


export function Tokenomics(props) {
    return (
     
 
        <Container className='tokenomics-section'> 
           
            <Rosa animation="fade-up"   duration={800}  delay={100}>
            <Row>
                 <Col md={6} sm ={12}>
      

                   <AnimationOnScroll animateIn="animate__fadeInLeft">
                          <h1>TOKENOMICS_</h1>
                   </AnimationOnScroll>
                   
                     <h3>The tokenomics of the TRV Ecosystem are laid out as followed:</h3>
                          <p>$RUST is earned by staking TRV NFTs. For every 6 hours it is staked, it produces 5.625 $RUST. Thus, it takes 13.3334 days to level up from staking rewards alone. </p>
                          <p>$RUST is converted to $OIL in a 300:1 ratio. $OIL cannot be converted back to $RUST. When $RUST is converted to $OIL 90% is burned. 10% remaining is unburned and sold on market for $OIL. This market bought $OIL is then redistributed to stakers in the $OIL single-sided staking farm (xOIL).</p>
                          <p> $OIL is used in batches of 10 to upgrade TRV to next “prestige” or level. Every level up increases the $RUST produced from staking. Each level up increases the reward by 10 Rust per 6 hours.</p> 
                          <p>Each level up also requires more $OIL. Each 10 levels the amount of oil needed increases by 2 $OIL.</p> 
                          <p>TRV NFTs are capped at level 50.</p>
                          <p> $RUST can also be burned to boosts staking or enact “overtime” on Rust production This enacts a short term, timed boost of 15% to all Rust production from your TRV.</p>
               
                 </Col>
                 <Col md={6} sm ={12} className = 'direction'>

                        <div className="directionimg">
                                <span>
                                    <i class="fa fa-angle-right cs1"></i>
                                    <i class="fa fa-angle-right cs2"></i>
                                    <i class="fa fa-angle-right cs3"></i>
                                </span>
                        </div>
     
                            <p className='staking'>STAKING</p>
                            <img src=  '/image/Group94.png' alt="img" className="directionimg1" width='100px'/>
                            <p className='upgading'>UPGRADING</p>
                            <img src=  '/image/Group96.png' alt="img" className="directionimg2" width='90px'/>
                            <p className='coversion'>COVERSION</p>
                            <img src=  '/image/Group112.png' alt="img" className="directionimg3" width='95px'/>
                            <img src=  '/image/image11.png' alt="img" className="directionimg4" width='150px'/>
                  
                  </Col>
                  </Row>  
                 </Rosa>
            
        </Container>
    );
}
