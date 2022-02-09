import { Imgbox } from './imgbox';
import "./container.css"

import { shallowEqual, useSelector } from "react-redux";
export const Box=()=>{
    //const dispatch = useDispatch();
    const {data } = useSelector(
      (state) => state.highlights,
      shallowEqual
    );
  
    
    return(
        <div id="mainbox" >
          

{data.map((v, i) => {
             
              return (
                <div key={i}>  <Imgbox  datas={v}/></div>
              );
            })}



        </div>
    )
}
