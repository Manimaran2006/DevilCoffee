import React from 'react'
import './Project1.css'
import Result1 from './Result1'
import { useState } from 'react'

const secretNum = Math.floor(Math.random() * 10) + 1;

function Project1() {

  const [term,setTerm]=useState("")

   const handleChange = (e) =>
  {
      setTerm(e.target.value)
  }
  return (
    <div className='title'>
          <h1>𝓖𝓾𝓮𝓼𝓼__𝓣𝓱𝓲𝓼😜</h1>
    <div className='Container'>
         <div className='head'>
            <label htmlFor='term'>
                 Guess the number between 1 to 10
            </label>
         </div>
            <input 
                 id='term'
                 type='text'
                 name='term'
                 onChange={handleChange}
           /> 
           <Result1 secretNum = {secretNum} term = {term}/>
    </div>
    </div>
  );
}

export default Project1