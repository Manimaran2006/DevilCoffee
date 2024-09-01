import React from "react";
import Demo1 from "./Demo1";
import Apple from "./Democlass2";

function Demo()
{
  const brand='Ford';
  const color='black';
  return(
    <>
    <h1>Manimaran</h1>
     <Demo1 brand={brand} color = {color}/>
    <Apple/>
    </>
  );
}
export default Demo;