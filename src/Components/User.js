import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function User()
{
    const {id} = useParams()
    return <h1>User id is : <b>{id}</b></h1>
}



{/* <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/User/1'>User 1</Link></li>
          <li><Link to='/User/2'>User 2</Link></li>
        </ul>
         <Routes>
            <Route  path='/'element={<Home/>} />
            <Route  path='/about'element={<About/>} />
            <Route  path='/contact'element={<Contact/>} />
            <Route  path='/User/:id'element={<User/>} />
         </Routes>
     </BrowserRouter> */}