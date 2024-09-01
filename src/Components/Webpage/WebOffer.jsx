import React from 'react'
import './WebOffer.css';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import Img, { Data } from './Images'

const WebOffer = () => {
  return (
    <div className='Offer'>
            <Link to={'/Home'}><IoIosHome className='Home-Icon'/></Link>
        <h1><center>𝕆𝕗𝕗𝕖𝕣 & ℙ𝕣𝕚𝕔𝕖𝕤</center></h1>

    {Data.map((data,index)=>
      <div className='item1' key={index}>
        <div className='img1'>
            <img style={{width:"60%",height:"100%"}} src={data.Img}/>
        </div>
        <div className='ItemContents'>
        <h2>Name : {data.Name}</h2>
        <h2>Price :{data.Price}</h2>
        <h2>Offer Price : {data.Offer}</h2>
        </div>

    </div>)}
    </div>)
}

export default WebOffer
