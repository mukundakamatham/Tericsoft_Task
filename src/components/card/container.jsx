import { Imgbox } from './imgbox';
;

import { shallowEqual, useDispatch, useSelector } from "react-redux";
export const Box=()=>{
    const dispatch = useDispatch();
    const {data } = useSelector(
      (state) => state.highlights,
      shallowEqual
    );

    return(
        <div id="mainbox" >
            {data.forEach(element => {
                <Imgbox data={element}/>
            })}
        </div>
    )
}