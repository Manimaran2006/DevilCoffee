import React from 'react'
import './Web.css'
import {Link} from 'react-router-dom';

const Web = () => {
  return (
    <div className='website'>
      <div className='header'>
              <h1 className='title'>.ℭ<span>𝔬𝔣𝔣𝔢𝔢</span></h1>
            <ul>
              <li><Link to='/Home'><button className='button'>Home</button></Link></li>
              <li><Link to='/WebOffer'><button className='button'>Offer</button></Link></li>
              <li><Link to='/Events'><button className='button'>Events</button></Link></li>
              <li><Link to='/Contacts'><button className='button'>Contacts</button></Link></li>
              <li><Link to='/Login'><span><button className='button'>Login</button></span></Link></li>
            </ul>
      </div>

      <div className='Web-content'>
        <div className='image'>
        <div className='img'></div> 
        </div>

        <div className='Content'>
          <h1>ℭ<span>𝔬𝔣𝔣𝔢𝔢:</span></h1>
          <ul>
            <li>Experience the rich aroma and bold flavors of coffee, crafted from the finest beans around the world.</li>
            <li>Each sip is a journey, from the sun-kissed farms to your cup, delivering a perfect balance of taste and tradition.</li>
            <li>Elevate your daily ritual with our expertly roasted blends.</li>
            </ul>
            <Link to={'/Contacts'}><button className='button1'>More Info</button></Link>
        </div>
        </div>
      </div>
  )
}

export default Web