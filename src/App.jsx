import React, { useState } from 'react'
import SideBar from './Components/SideBar'
import DasBoard from './Components/DasBoard'
import AddUser from './Components/AddUser'
import Profile from './Components/Profile'

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import EditUser from './Components/EditUser'

function App() {

  let [user,setUser] = useState([
    {
      id:1,
      name:"surendher",
      email:"suren@gmail.com",
      dob:"2000/06/13",
      gender:'male',
      subscription:true
    },
    {
      id:2,
      name:"sri",
      email:"sri@gmail.com",
      dob:"2004/06/11",
      gender:'female',
      subscription:true
    },
    {
      id:3,
      name:"leena",
      email:"leena@gmail.com",
      dob:"2001/04/22",
      gender:'female',
      subscription:true
    }
  ])

  return <>
   <div id="wrapper">
    <BrowserRouter>
    <SideBar/>
    <Routes>
      <Route path='/' element={<DasBoard user={user} setUser={setUser}/>}/>
      <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}/>
      <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter>

   </div>
  
  </>
}

export default App
