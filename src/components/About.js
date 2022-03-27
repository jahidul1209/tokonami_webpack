import React from 'react';
import {Row , Col, Container}from 'react-bootstrap';
import Rosa from "react-on-scroll-animation"  
// import "react-on-scroll-animation/build/index.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export function About(props) {
    
    return (
        <Container className='about-section'>
            <Row>
              
                     <Col  xs={12} md={6} className = 'aboutImg'>
                     <Rosa animation="fade-right"   
                      duration={800}   
                      delay={200}>
                          <img src= '/image/22222.jpg' alt="img" className="abut-img" width='100%'/>
                          </Rosa>  
                     </Col>

            
                    
                   <Col  xs={12} md={6} className = 'pt-5 pb-5' >
                    <Rosa animation="fade-left"   
                      duration={800}   
                      delay={200}>
                            <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                       <h3>The year is 2042.</h3>
                            </AnimationOnScroll>
                          
                            <p>The AI agreement was violated by [REDACTED] in the search of infiltrating the CIA’s archives.</p> 
                            <p>Technology took a mind of its own.</p>  
                          
                            <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                  <h3>The year is 3046. </h3>
                            </AnimationOnScroll>
                            <p>The human species has long been dominated.</p> 
                            <p>Cyborgs are ruling the world.</p> 
                            <p>A select group of humans, the * TOKONAMI * have infiltrated the new establishment by transcending their consciousness into deactivated cyborgs, creating the <span style={{color:'#ED1B24'}}>TOKONAMI REVOLUTION</span>.</p>
                            <p> 4.444 transcended humans must leave behind their bodies in order to fight the ruling class in a newly evolved shape.</p>
                            <p> But little do they know; the greatest battle will be held against themselves…</p>
                
                    </Rosa> 
                  </Col>
            </Row>
           
        </Container>
    );
}
