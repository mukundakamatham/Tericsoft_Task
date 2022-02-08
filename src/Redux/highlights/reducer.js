import { GET_HIGHLIGHTS,POST_HIGHLIGHTS, } from "./actionTypes";



const initState = {
  data:[{
    "img": "https://images.unsplash.com/photo-1609605988071-0d1cfd25044e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGN5Y2xpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"title": "Day 1 of BMX",
"time": "5:12",
"button":["heats","highlights"]
},
{
  "img": "https://images.unsplash.com/photo-1534146789009-76ed5060ec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"title": "Day 2 of BMX",
"time": "5:12",
"button":["heats","highlights"]
},
{
  "img": "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"title": "Day 3 of BMX",
"time": "5:12",
"button":["heats","highlights"]
}],
 

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
