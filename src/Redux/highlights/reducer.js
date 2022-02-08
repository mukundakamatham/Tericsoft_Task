import { GET_HIGHLIGHTS,POST_HIGHLIGHTS, } from "./actionTypes";



const initState = {
  data:[{
    "img": "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGN5Y2xpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"title": "Day 1 of BMX",
"time": "5:12",
"button":["heats","highlights"]
},
{
  "img": "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGN5Y2xpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"title": "Day 2 of BMX",
"time": "5:12",
"button":["heats","highlights"]
},
{
  "img": "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGN5Y2xpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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
