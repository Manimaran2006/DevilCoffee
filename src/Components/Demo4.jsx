import React from "react";
import Demo1 from "./Demo1";
function Demo4()
{
    const isDoor=true
    const mystyle = {color:"red"}
    const carInfo = {brand:"ford" , color:"black"};
    const appleInfo = {type:"round" , color:"red"};
    const text=`Hi I'm a ${carInfo.brand} ${carInfo.color} car`
    const text1=`Hi I'm a ${appleInfo.type} ${appleInfo.color} apple`
    const carList = [
        {brand:"BMW" , color:"black"},
        {brand:"TATA" , color:"white"},
        {brand:"TOYOTO" , color:"red"},
    ]
    const numberList = [
        1,2,3,4,5
    ]
    const showCar = carInfo.brand != undefined && carInfo.color != undefined ;
    const showApple = appleInfo.type != undefined && appleInfo.color != undefined ;
    return(
        <>
        <h1 style={mystyle}>Who live in my Gerage?</h1>
        {/* inline CSS */}
        {isDoor?<h2>Gerage is open</h2>:<h2>Gerage is not open</h2>}
        { showCar? <div>{text}</div>:null } 
        { showApple? <div>{text1}</div>:null } 
       <ul>
        {
            carList.map((text,index) => <li key={index}>Hi I'm {text.brand+" "+text.color} car</li>)
                                                //text.brand or text.color
        }
       </ul>
       <ul>
           { 
              numberList.map((n,index) => <li key={index}>{n}</li>) 
           }
       </ul>
        </>
    );
}
export default Demo4