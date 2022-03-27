import React from 'react';
import { Container, Table}from 'react-bootstrap';
// import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation" ;
import { AnimationOnScroll } from 'react-animation-on-scroll';


export function Metrics(props) {
    return (
        <Container className='matrics-section'>
            <div className='matrics  pt-5 pb-5'>
                     <div className = 'rustsec1 rustsec'>
                        <Rosa animation="fade-right"   duration={800}  delay={100}>
                           <img src=   '/image/Group.png' alt="img" className="rustimg" width='90%'/>
                           <img src=  '/image/Group84.png' alt="img" className="rustimg1" width='150px'/>
                        </Rosa>  
                      </div>
                    <div className = 'rustsec2'>
                       <Rosa animation="fade-left"    duration={800}    delay={100}>
                        <div className='MetriRUST'>
                          
                                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                <h2 className='d-flex'><span style={{color:'white'}}>Metrics:</span> $RUST  </h2>
                                </AnimationOnScroll>
                          
                            <p>Total supply: N/A </p>
                            <p>Airdrop Amount: 1500 Rust @ 4444 NFTs = 13,332,000 </p>
                            <p>$RUST airdropped 2 times.</p>
                            <p> Inflation Amount: 5.625 Rust per 6-hour window staked. </p>
                            <p>Team Token: 10% of Airdrop (optional)</p>
                        </div>
                        <div className='MetriTable mt-3'>
                        <Table className="table table-dark">
                                <tbody>
                                <tr>
                                    <th>Total supply </th>
                                    <td>Uncapped</td>
                                </tr>
                                <tr>
                                    <th>Liquidity Reserves 1</th>
                                    <td>10,000.000 $RUST</td>
                                </tr>
                                <tr>
                                    <th>Aidrop</th>
                                    <td>13.332,00 $RUST</td>
                                </tr>
                                <tr>
                                    <th>Tean Tokens</th>
                                    <td>5,000,000 $RUST</td>
                                </tr>          
                                </tbody>
                            </Table>
                           </div>
                        </Rosa>  
                    </div>   
            </div>
            <div className='matricsOil  pt-5 pb-5'>
                    <div className = 'rustsec2'>
                      <Rosa animation="fade-up-right"  duration={800}   delay={100}>
                        <div className='MetriRUST'>
                           <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                                <h2 className='d-flex'><span style={{color:'white'}}>Metrics:</span> $OIL</h2>
                           </AnimationOnScroll>
                           <p>Total supply: 24 million $OIL</p> 
                           <p>Available for Conversion (from $RUST): 23,450,000 $OIL </p>
                           <p>- (this number caps staking (prestige) level at 50 for </p>
                           <p>Team Token: 550,000 $OIL (optional)</p>
                           
                        </div>
                        <div className='MetriTable mt-3'>
                        <Table className="table table-dark">
                                <tbody>
                                <tr>
                                    <th>Total supply </th>
                                    <td>24,000,000 $OIL</td>
                                </tr>
                                <tr>
                                    <th>Mintable from $RUST in Contract</th>
                                    <td>23,450,000 $OIL</td>
                                </tr>
                           
                                <tr>
                                    <th>Tean Tokens</th>
                                    <td>550,000 $OIL</td>
                                </tr>          
                                </tbody>
                            </Table>
                        </div>
                        </Rosa>
                    </div>
                    <div className = 'rifgt rustsec rustsec1'>
                        <Rosa animation="fade-up-left"   duration={800}  delay={100}>
                            <img src=  '/image/Group-1.png' alt="img" className="rustimg" width='90%'/>
                            <img src=  '/image/Group92.png' alt="img" className="rustimg2" width='150px'/>
                        </Rosa>
                    </div>
            </div>
            <div className='matrics pt-5 pb-5'>
                    <div  className = 'rustsec1 rustsec'>
                            <Rosa animation="fade-up-right"    duration={800} delay={100}>
                                <img src= '/image/Group-2.png' alt="img" className="rustimg" width='90%'/>
                                <img src= '/image/Group106.png' alt="img" className="rustimg3" width='150px'/>
                            </Rosa>
                    </div>
                    <div  className = 'rustsec2'>
                    <Rosa animation="fade-up-left"  duration={800}    delay={100}>
                        <div className='MetriRUST'>
                        
                                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                <h2 className='d-flex'><span style={{color:'white'}}>Metrics:</span>xOIL </h2>
                                </AnimationOnScroll>
                                <p>- Buyback mechanism, uses 10% of $RUST burned during </p>
                                <p>$OIL conversion to buy $OIL off the market, that market bought</p> 
                                 <p>oil is then distributed to $OIL single sided stakers. </p>
                                 <p>- Remaining 90% of $RUST is burned out of circulation. </p>
                                 <div className = 'mt-3'>
                                    <p>Staking Level: Max Level of 50 </p>
                                    <p>NFT Mint Count: 4.444 TRV </p>
                                    <p>* if all 3 tiers are staked simultaneously a 15% boost </p>
                                    <p>is rewarded to the yield. </p>
                                 </div>
                              
                        </div>
                        </Rosa>
                    </div> 
            </div>
            <img src=  '/image/Group 109.png'  alt="img" width='100%' className='mt-5 pt-5'/>
        </Container> 
    );
}
