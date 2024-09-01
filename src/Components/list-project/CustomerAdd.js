import React from 'react'
import Customer from './Customer'

function CustomerAdd(customers){
  return (
    <div>
        <h3>Customer List</h3>
        <ul>
           { customers.map((customer) => <li>{customer}</li>) }
        </ul>
    </div>
  )
}

export default CustomerAdd