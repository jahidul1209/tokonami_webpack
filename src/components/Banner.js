import React from 'react';
import Container from 'react-bootstrap/Container';
// import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation" ;


var backgroundImage = {
    width: "100%",
    height: "auto",
    backgroundImage: `linear-gradient(to bottom, rgba(0 0 0 / 80%), rgba(0 0 0 / 80%)),  url('../image/back.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  export function Banner(props) {
    return (
   
        <div className='bannerSection' style={backgroundImage}>
            <Container>
			         <Rosa animation="zoom-in"   duration={800}  delay={100}>
                 <img src= '/image/tokonami.png'  alt="img" className="mx-auto d-flex" width='100%'/>
               </Rosa>
		        </Container>
            <img src=  '/image/Group7.png' alt="img" className="mx-auto d-flex" width='90%'/>
        </div>
    );
}
