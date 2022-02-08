import React from 'react';
import './App.css';

import {Showcase} from './components/navbar/navbar'
import {Welcome} from './components/navbar/nav1'
import { Head } from './components/highilight/highlight';
import { Box } from './components/card/container';

function App() {
  return (
    <div className="App">
    
       <Showcase/>
       <Welcome/>
       
 
    <Head/>
    <Box/>
  </div>
  );
}

export default App;
