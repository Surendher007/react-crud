import React, { useContext } from 'react'
import { DashboardMainContext } from '../Context/DashBoardContext'

function Profile() {
    let data = useContext(DashboardMainContext)
    console.log(data)
  return <>
      <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Profile</h1>
                  </div>
                  <div className="row">

                  </div>
              </div>
          </div>
      </div>
  </>
}

export default Profile
