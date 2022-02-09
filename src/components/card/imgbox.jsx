import React from 'react';
import Button from '../Buttons/Button';
import"./imgbox.css"


export const Imgbox=({datas})=>{
   const data=datas
  


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

{ data.button.map((e)=>{

       return(
        <Button
        text={e}
        className="pbutton"
        href={""}
        newTab={true}
       />
       )
})}


    </div>
</div>
        </div>
        
        
        
        
        
        </>






    )
}
