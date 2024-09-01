import React from "react"
function DemoCondition()
{
    const carInfo={brand:'brand' ,color:'color'}
    const text=`Hi I'm a ${carInfo.brand} ${carInfo.color} car`
    const isShow = carInfo.brand != undefined && carInfo.color != undefined
    return(
        <>
        <h1>Who are in a gerage?</h1>
        {
            isShow?text:null
        }
        </>
    )
}
export default DemoCondition