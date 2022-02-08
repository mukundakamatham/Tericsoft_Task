
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faFootball,faBullseye, faHorse,faDumbbell,faShip,faPersonSwimming,faPersonBiking,faBroomBall} from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
export const Showcase = () => (
  < >
    <ul id="container" className="navbar">
      
<li id="act">   <FontAwesomeIcon id="icon"  icon={faStar} size="3x"/><p id="fir">1</p><p id="font"> Featured</p><p id="fir1">2</p></li>
<li  >     <FontAwesomeIcon icon={faBullseye} id= "icon"  size="3x" /><p id="font">Archery</p></li>
<li >  <FontAwesomeIcon id="icon" icon={faDumbbell} size="3x"/><p id="font"> Gymnastics</p></li>
<li id="active">  <FontAwesomeIcon id="icon" icon={faPersonBiking}  size="3x"/><p id="font"> Cycling</p></li>

<li >  <FontAwesomeIcon id="icon" icon={faPersonSwimming} size="3x"/><p id="font"> Swimming</p></li>

<li >   <FontAwesomeIcon id="icon" icon={faFootball}size="3x"/><p id="font"> Extreme</p></li>
<li >   <FontAwesomeIcon id="icon" icon={faHorse}size="3x"/><p id="font"> Equestrian</p></li>
<li >   <FontAwesomeIcon id="icon" icon={faBroomBall}size="3x"/><p id="font"> Golf</p></li>
<li >   <FontAwesomeIcon id="icon" icon= {faShip} size="3x"/><p id="font"> Lake&sea</p></li>
</ul>
<p id="break"></p>
  </>
)
