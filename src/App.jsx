import React, { useState } from 'react';
import SideBar from './Components/SideBar';
import DasBoard from './Components/DasBoard';
import AddUser from './Components/AddUser';
import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EditUser from './Components/EditUser';
import DashBoardContext from './Context/DashBoardContext';
import UseRef from './Components/UseRef';
import { useReducer } from 'react';
import Reduser from './Components/Reduser';

export const UserContext = React.createContext();

function App() {
  let [user, setUser] = useState([
    {
      id: 1,
      name: "surendher",
      email: "suren@gmail.com",
      dob: "2000/06/13",
      gender: 'male',
      subscription: true,
    },
    {
      id: 2,
      name: "sri",
      email: "sri@gmail.com",
      dob: "2004/06/11",
      gender: 'female',
      subscription: true,
    },
    {
      id: 3,
      name: "leena",
      email: "leena@gmail.com",
      dob: "2001/04/22",
      gender: 'female',
      subscription: true,
    }
  ]);

  return (
    <div id="wrapper">
      <BrowserRouter>
        <SideBar />
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/' element={
              <DashBoardContext>
                <DasBoard />
              </DashBoardContext>
            } />
            <Route path='/add-user' element={<AddUser user={user} setUser={setUser} />} />
            <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser} />} />
            <Route path='/profile' element={
              <DashBoardContext>
                <Profile />
              </DashBoardContext>
            } />
            <Route path='/use-ref' element={<UseRef/>}/>
            <Route path='/reduser' element={<Reduser/>}/>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
