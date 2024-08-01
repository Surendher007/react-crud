import React, { useReducer,useState } from 'react';
import SideBar from './Components/SideBar';
import DasBoard from './Components/DasBoard';
import AddUser from './Components/AddUser';
import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EditUser from './Components/EditUser';
import DashBoardContext from './Context/DashBoardContext';
import UseRef from './Components/UseRef';
import Reduser from './Components/Reduser';
import Actions from './Utils/Actions';
import { findIndexId } from './Common/Helper';

export const UserContext = React.createContext();
let initialState = [
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
];

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="wrapper">
      <BrowserRouter>
        <SideBar />
        <UserContext.Provider value={{ state, dispatch }}>
          <Routes>
            <Route path='/' element={
              <DashBoardContext>
                <DasBoard />
              </DashBoardContext>
            } />
            <Route path='/add-user' element={<AddUser />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
            <Route path='/profile' element={
              <DashBoardContext>
                <Profile />
              </DashBoardContext>
            } />
            <Route path='/use-ref' element={<UseRef />} />
            <Route path='/reducer' element={<Reduser />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case Actions.ADD_USER: {
      action.payload.id = state.length ? state[state.length - 1].id + 1 : 1;
      state.push(action.payload)
      return [...state, action.payload];
    }
    case Actions.EDIT_USER :{
      let index = findIndexId(state, action.payload.id);
      if (index !== -1) {
        state.splice(index, 1,action.payload);
        return [...state]
      } else {
        return [...state]
      }
    }
    case Actions.DELETE_USER: {
      let index = findIndexId(state, action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        return [...state]
      } else {
        return [...state]
      }
    }
   
  }
}

export default App;
