import React from 'react'
import { useEffect,useState } from 'react'

const Timer = () => {

    const[count,setCount] = useState(0);

    useEffect(() => {
        console.log('Screen rendered')
        checkout()
    })
    
    function checkout()
    {
        if(count>10)
        {
            setCount(1);
        }
    }
    function updateCount()
    {
        setCount((previousState) =>{
            return previousState+1
        })
    }
  return (
    <div>
      <h1>I have a rendered {count} times!</h1>
      <button onClick={updateCount}>Increase Count</button>
    </div>
  )
}

export default Timer