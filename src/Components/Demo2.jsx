import React from "react";
import Demo3 from "./Demo3";
function Demo2()
{
   const isDoor = false
   
   return(
        <>
        <h1>Who are a garege?</h1>
        {isDoor?<h2>gerage door is open</h2>:<h2>gerage door is not open</h2>}
         </>
   );
}
export default Demo2