import { useState } from "react";

function UDemo1()
{
    const[scooter,setScooter] = useState(
        {
            color : "Red",
            brand : "Honda",
            model : "Activa 6G",
            year : "2024"
        }
    )

   function updateColor()
   { //using spread opearater
    setScooter(previousState => {
        return {...previousState,color : "white"}
    })
   }

    return(
        <>
        <h1>Scooter</h1>
        <p>Color : {scooter.color}</p>
        <p>Brand : {scooter.brand}</p>
        <p>Model : {scooter.model}</p>
        <p>Year : {scooter.year}</p>
        <button onClick={updateColor}>Change color</button>
        </>
    )
}
export default UDemo1