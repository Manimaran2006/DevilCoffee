import React from "react";

function Demo3()
{
    const text={brand:"ford", color:"black"}
    const isShow=text.brand !=undefined && text.color !=undefined
    return(
        <>
           <h2>Who is an garege</h2>
           {
            isShow?<h2></h2>:null
           }
        </>
    );
}
export default Demo3