import React, { useEffect, useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
import { findIndexId } from '../Common/Helper';
import { UserContext } from '../App';

function EditUser() {
let {user,setUser}=useContext(UserContext)

let [name,setName]= useState("")
let [email,setEmail]= useState("")
let [dob,setDob] = useState("")
let [gender,setGender] = useState("")
let [subscription,setSubscription] = useState(false)

let navigate = useNavigate()
let {id} = useParams()

let handleSubmit = ()=>{
    let data = {id:Number(id),name,email,dob,gender,subscription}
    let index = findIndexId(user,Number(id))
    user.splice(index,1,data)
    setUser([...user])
navigate('/')
}
let getData = ()=>{
    let index = findIndexId(user,Number(id))
    if(index!=-1){
setName(user[index].name)
setEmail(user[index].email)
setDob(user[index].dob)
setGender(user[index].gender)
setSubscription(user[index].subscription)
    }
    else{
alert("invalid entry")
    }
}

useEffect(()=>{
    if(id){
        getData()
    }
},[])



 

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Edit user</h1>
                  </div>
                  
                  <div className="row">
                  <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value) } />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="DOB" value={dob} onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select value={gender} onChange={(e)=>setGender(e.target.value)}>
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

export default EditUser

