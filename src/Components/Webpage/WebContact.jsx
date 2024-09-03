import React from 'react'
import './WebContact.css'
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";

const WebContact = () => {
  return (
    <div className='Contact-page'>
               <Link to={'/Home'}><IoIosHome className='Home-Icon'/></Link>
           <h1 className='Contact-title'><center>ℂ𝕠𝕟𝕥𝕒𝕔𝕥𝕤</center></h1>
           <div className='Contact-Information'>
           <div className='Contact'>
               <h1><center>Contect Information</center></h1>
                    <label>
                        <h2>Shop Name :   <span className='Shop-Name'>.ℭ𝔬𝔣𝔣𝔢𝔢</span></h2>
                    </label>
                    <label>
                        <h2>Location :   <span>Perambalur,Tamilnadu</span></h2>
                    </label>
                    <label>
                        <h2>Email :   <span>Devil.Coffee@com</span></h2>
                    </label>
                    <label>
                        <h2>Phone Number :   <span>8110930736</span></h2>
                    </label>
           </div>

           <div className='Feedback'>
               <h1><center>Feedback</center></h1>
               <form>
                <label>
                    <input type='text' placeholder='Name'/>
                </label>
               </form>
               <form>
                <label>
                    <input type='text' placeholder='Phone number OR Email'/>
                </label>
               </form>
               <form>
                <label>
                    <textarea placeholder='Enter Your Feedback Message'/>
                </label>
               </form>
               <button>Submit</button>
           </div>
           </div>
    </div>
  )
}

export default WebContact