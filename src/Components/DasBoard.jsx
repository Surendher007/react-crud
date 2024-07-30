import React, {useContext} from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import {findIndexId} from '../Common/Helper'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { DashboardMainContext } from '../Context/DashBoardContext';

function DasBoard() {
let {user,setUser} = useContext(UserContext)
let data = useContext(DashboardMainContext)

  
let navigate = useNavigate()



let handleDelete = (id)=>{
  let index = findIndexId(user,id)
  if(index !=-1){
user.splice(index,1)
setUser([...user])
  }
  else{
alert("invalid entry")
  }
}

  return <>
      <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                  </div>
                  <div className="row">
                 {
                 data.map((e,i)=>{
                    return  <Card data={e} key={i}/>
                 })
                }
              </div>
              <hr/>
              <h1 className="h3 mb-3 text-gray-800">User Management</h1>
              <div className="row">
              <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Subscription</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((e)=> {
            return <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.dob}</td>
              <td>{e.gender}</td>
              <td>{e.subscription?<>Active</>:<>InActive</>}</td>
              <td>
                <Button variant='primary'onClick={()=>navigate(`/edit-user/${e.id}`)}>Edit</Button>
                &nbsp;
                <Button variant='danger'onClick={()=>handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
              </div>
              </div>
          </div>
      </div>
  </>
}

export default DasBoard
