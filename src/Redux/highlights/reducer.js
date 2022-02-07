import { GET_HIGHLIGHTS,POST_HIGHLIGHTS, } from "./actionTypes";



const initState = {
  data:"v",
  token:"a",

};

 const hilightsReducer = (state = initState, { type, payload }) => {
   switch (type) {
    case GET_HIGHLIGHTS: {
      return {
        ...state,
      
      };
    }
    case POST_HIGHLIGHTS: {
      return {
        ...state,payload
       
      };
    }
    default:
      return state;
  }
 };

export { hilightsReducer };
