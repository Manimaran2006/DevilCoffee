import React from 'react'
import './WebEvent.css'
import Images, { Info } from './Images'
import { Routes,Route,Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
const WebEvent = () => {
  return (
    <div className='WebEvent'>
               <Link to={'/Home'}><IoIosHome className='Home-Icon'/></Link>
        <div className='Event-title'>
        <h1><center>𝔼𝕧𝕖𝕟𝕥𝕤</center></h1>
        {Info.map((Info,index)=> 
        <div className='Event' key={index}>
            <div className='Event-img'>
                <img style={{width:"17%",height:"17%"}} src={Info.Picture}/>
                <div className='Event-Content'>
                    <h2>Event Name : {Info.Event}</h2>
                    <h3>Condition : {Info.Condition}</h3>
                    <p>Price : {Info.Price}</p>
                </div>
                <div className='register-button'>
                    <Link to={'/Register'}><button>Register</button></Link>
                    </div>
            </div>
        </div>)}
        </div>
        <p className='Note'><span>Note : </span>Then many events is celebrate for a shop</p>
    </div>

  )
}

export default WebEvent