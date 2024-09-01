import { useState } from "react";

function UDemoArray()
{
    const [list,setList] = useState([]);
    const [count,setCount] = useState(1);
     
    function addItem()
    {
        const ItemName = 'Love'+count;
        setList((previousState) => { return [...previousState,ItemName]})
        setCount((previousState) => { return previousState+1})
    }
    return(
        <>
        <h1>List Love</h1>
        <button onClick={addItem}>Add Love</button>
        <ul>
            {
             list.map((el,index) => <li key={index}>{el}</li>)
            }
        </ul>
        </>
    );
}
export default UDemoArray