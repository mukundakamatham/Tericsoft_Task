import React from 'react';
import "./nav2.css"
class Welcome extends React.Component {
    render() {
      return(
          <>
        <ul className="nav2">  
        <li><b>BMX</b></li>
        <li>mountain</li>
        <li>road</li>
        <li>track</li>
        </ul>
        <div  className="navbreak"></div></>
        );
    }
  }

  export {Welcome};