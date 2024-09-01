import { useState } from "react";

function UDemo()
{
    const [animal,setAnimal] = useState("Dog")
    const [color,setColor] = useState("Red")
    const [brand,setBrand] = useState("Honda")
    const [model,setModel] = useState("Activa 6G")
    const [year,setYear] = useState("2024")
    const mystyle={color:"gray"}
    return(
        <>
        <h1 style={mystyle}>My foverite animal is {animal}</h1>
        <button onClick={ () =>  setAnimal('Dear')}>Change color</button>
        <h1>Scooter</h1>
        <p>color : {color}</p>
        <p>brand : {brand}</p>
        <p>model: {model}</p>
        <p>year : {year}</p>
        </>
    );
    
}
export default UDemo

