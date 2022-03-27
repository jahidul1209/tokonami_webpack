import React from 'react';
// import './style/App.css';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Services } from './components/Services';
import { Tokenomics } from './components/Tokenomics';
import { Metrics } from './components/Metrics';



export function App() {

  return (
    <div className="App">

        <Banner/>

         <About/>
        <Services/>
        <Tokenomics/>
       <Metrics/>
       
     
      
    </div>
  );
}

