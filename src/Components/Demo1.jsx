import React from "react";
function Demo1(props)
{
    const {brand}=props
    const {color}=props
    const text= `Hi I'm a ${brand} ${color} car`;
    return(
        <h2>{text}</h2>
    );
}
export default Demo1