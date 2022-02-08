import React from 'react';
import './App.css';

import {Showcase} from './components/navbar/navbar'
import {Welcome} from './components/navbar/nav1'
import { Head } from './components/highilight/highlight';
import { Imgbox } from './components/card/imgbox';

function App() {
  return (
    <div className="App">
    <header className="App-header">
   
       <Showcase/>
       <Welcome/>
       
    </header>
    <Head/>
    <Imgbox/>
  </div>
  );
}

export default App;
