import React, { useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function AddUser() {
let {user,setUser} = useContext(UserContext)

let [name,setName]= useState("")
let [email,setEmail]= useState("")
let [dob,setDob] = useState("")
let [gender,setGender] = useState("")
let [subscription,setSubscription] = useState(false)

let navigate = useNavigate()

let handleSubmit = ()=>{
  let data = {name,email,dob,gender,subscription}
  data.id = user.length?user[user.length-1].id+1:1
  user.push(data)
  setUser([...user])

  navigate('/')
}
  return <>
  <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Add User</h1>
                  </div>
                  
                  <div className="row">
                  <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value) } />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="DOB" onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select onChange={(e)=>setGender(e.target.value)}>
        <option value="null">select one</option>
          <option value="male">Male</option>
          <option value="female">female</option>
          <option value="others">others</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="subscription" checked={subscription} onChange={(e)=>setSubscription(e.target.checked)} />
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()} >
        Submit
      </Button>
    </Form>
              </div>
              </div>
          </div>
      </div>
  </>
}

export default AddUser
