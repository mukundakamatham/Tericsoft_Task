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
           <div> <Imgbox datas={data[0]}/></div>
           <div> <Imgbox  datas={data[1]}/></div>
           <div>  <Imgbox  datas={data[2]}/></div>

        {/* { data.forEach((element) => {
        <Imgbox datas={element}/>
         })}; */}
        </div>
    )
}