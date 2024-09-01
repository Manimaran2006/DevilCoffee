import React from 'react'
import './Project1.css'

const Result1 = ({secretNum,term}) => {
   const mystyle = {color:"green"}
   let Result ;
   if(term)
       {
         if(secretNum > term)
           {
              Result = '𝑳𝒐𝒘𝒆𝒓 🤨'
           }
        else if(secretNum < term)
           {
              Result = '𝑯𝒊𝒈𝒉𝒆𝒓 🤨'
            }
        else if(secretNum == term)
            {
               Result = '𝒀𝒊𝒑𝒑𝒆𝒆!! 𝒄𝒐𝒓𝒓𝒆𝒄𝒕 👌'
            }
        else
           {
               Result = '𝑰𝒏𝒗𝒂𝒍𝒊𝒅 𝒊𝒏𝒑𝒖𝒕 🙄'
           }
}
  return (
    <div>
        <h3 style={mystyle}>Your Guessed : {Result}</h3>
    </div>
  )
}

export default Result1