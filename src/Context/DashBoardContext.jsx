import React from 'react'
export const DashboardMainContext = React.createContext()

function DashBoardContext({children}) {
    let data = [
        {
          tittle:" Earnings (Monthly",
          price:"40,000",
          color:'primary',
          icon:'fa-calendar',
          isProgress:false
        },
        {
          tittle:" Earnings (Annual)",
          price:"215,000",
          color:'success',
          icon:'fa-dollar',
          isProgress:false
        },
        {
          tittle:" Tasks",
          price:"20",
          color:'info',
          icon:'fa-clipboard',
          isProgress:false
        },
        {
          tittle:"Pending Requests",
          price:"18",
          color:'warning',
          icon:'fa-comments',
          isProgress:false
        }
      ]
  return <DashboardMainContext.Provider value={data}>
{children}
  </DashboardMainContext.Provider>
}
export default DashBoardContext
