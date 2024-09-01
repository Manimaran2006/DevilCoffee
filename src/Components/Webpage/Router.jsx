import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Web from './Web';
import WebOffer from './WebOffer'
import WebLogin from './WebLogin'
import WebEvent from './WebEvent';
import WebContact from './WebContact';



const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Web/>} />
        <Route path='/Home' element={<Web/>} />
        <Route path='/WebOffer' element={<WebOffer/>}/>
        <Route path='/Events' element={<WebEvent/>}/>
        <Route path='/Contacts' element={<WebContact/>}/>
        <Route path='/Login' element={<WebLogin/>}/>
        <Route path='/Register' element={<WebLogin/>}/>
        <Route path='/Cotacts' element={<WebLogin/>}/>
        <Route path='/Next1' element={<WebEvent/>}/>
    </Routes>
  )
}

export default Router