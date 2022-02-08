import React from 'react';
import Button from '../Buttons/Button';
import"./imgbox.css"


export const Imgbox=({datas})=>{
   const data=datas
  //  console.log(data,"asd")
//     {
//         "img": "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGN5Y2xpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
// "title": "Day 1 of BMX",
// "time": "5:12",
// "button":["heats","highlights"]
//     }

    return(
        <>
   
        
        <div id="imgcont">
            <div>
<img src={data.img} id="img" alt=""/></div>
<div id="bottom" >
    <div id="content">
        <h3 id="text">{data.title}</h3>
        <h5 id="text1">{data.time}</h5>
    </div>
    <div id="but">
    <Button
 text={data.button[0]}
 className="pbutton"
 href={""}
 newTab={true}
/>
<Button
 text={data.button[1]}
 className="pbutton"
 href={""}
 newTab={true}
/>

    </div>
</div>
        </div>
        
        
        
        
        
        </>






    )
}