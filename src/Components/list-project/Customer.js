import React, { useState } from 'react';
import CustomerAdd from './CustomerAdd';

function Customer(){

    const [input,setInput] = useState("")
    const [customers,setCustomers] = useState([])

    function addCustomer()
    {
        if(input)
        {
            setCustomers((previousState) => [...previousState, input])
        }
    }
  return (
    <>
    <div>
        <h1>React Coustomer List</h1>
        <h3>Add New Customer</h3>
        <input type='text' onChange={(e)=> setInput(e)}/>
        <button onClick={addCustomer}>Add</button>
    </div>
     <CustomerAdd customers={customers}/>
     </>
  )
}

export default Customer;