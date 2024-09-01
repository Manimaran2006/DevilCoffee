import React, { useState } from 'react'

const Form = () => {
    const[input,setInput] = useState("")
    // const[age,setAge] = useState("")
    // const[email,setEmail] = useState("")

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log('Form Submitted!')
        console.log('Current State',input)
        // console.log('Current State',age)
        // console.log('Current State',email)
    }

  return (
     <form onSubmit={handleSubmit}>
        <label>Enter Your Name : <input type='text' onChange={(e) => {setInput ((previousState) => { return {...previousState, name: e.target.value}})}}/></label><br/>
        <label>Enter Your Age :  <input type='text' onChange={(e) => {setInput ((previousState) => { return {...previousState, age: e.target.value}})}}/></label><br/>
        <label>Enter Your Email :  <input type='text' onChange={(e) => {setInput ((previousState) => { return {...previousState, email: e.target.value}})}}/></label><br/>

        <input type='submit' value='Submit Form'/>
     </form>
  )
}

export default Form