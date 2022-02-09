import { Imgbox } from './imgbox';
import "./container.css"

import { shallowEqual, useDispatch, useSelector } from "react-redux";
export const Box=()=>{
    //const dispatch = useDispatch();
    const {data } = useSelector(
      (state) => state.highlights,
      shallowEqual
    );
   
    return(
        <div id="mainbox" >
          
          

         { data.map((element) => {
         <div> <Imgbox datas={element}/></div>
         })}
        </div>
    )
}
