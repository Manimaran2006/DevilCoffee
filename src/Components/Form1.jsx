import React, { useState } from 'react'

const Form1 = () => {
    const [input,setInput] = useState({number:"+91",email:"@gmail.com" , country:"India" , about:"I am student"})

    function handleSubmit(e)
    {
       e.preventDefault();
       console.log('Form Submitted')
       console.log('Current State',input)
    }

    function handleChange(e)
    {
        const name = e.target.name
        const value = e.target.value
        setInput((previousState) => {return {...previousState , [name] : value}})
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Enter Your Name : <input type='text' name="name" onChange={handleChange}/></label><br/>
        <label>Enter Your Age : <input type='text' name="age"  onChange={handleChange}/></label><br/>
        <label>Enter Your Email : <input type='text' name="email"  onChange={handleChange} value={input.email}/></label><br/>
        <label>Enter Your number : <input type='text' name="number"  onChange={handleChange} value={input.number}/></label><br/>
        <label>Enter Your number :  
             <select name="country" onChange={handleChange} value={input.country}>
                <option value="">Select</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="Amarica">Amarica</option>
                </select></label><br/>
                <label>Enter About You : <textarea name="about" value={input.about}  onChange={handleChange}></textarea></label><br/>
        <input type='submit' value='Submit Form'/>
    </form>
    
  )
}

export default Form1