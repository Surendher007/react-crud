import React, {useReducer, useState} from 'react'
import { Button } from 'react-bootstrap'

let initialState = {
    count:0
}

function reduser(state,action){
    switch(action.type){
        case "INCREMENT" :{
            return{
                ...state,
                count:state.count+1
            }
        }
        case "DECREMENT" :{
            return{
                ...state,
                count:state.count-1
            }
        }
        case "RESET" :{
            return{
              ...initialState
            }
        }
        case "UPDATE_NAME" :{
            return{
                ...state,
                name:action.payload
            }
        }
    }
}

function Reduser() {
    let [state,dispatch] = useReducer(reduser,initialState)
  return <>
  <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Use Reduser</h1>
                  </div>
                  <div className="row">
                    <div>
                <Button onClick={()=>dispatch({type:"DECREMENT"})}>-</Button>&nbsp;&nbsp;&nbsp;
                {state.count}&nbsp;&nbsp;&nbsp;
                <Button onClick={()=>dispatch({type:"INCREMENT"})}>+</Button>
             
                

                
                    </div>
                    <div className="row">
                        <input className='ji' value={state.name} type='text' onChange={(e)=>dispatch({type:"UPDATE_NAME",payload:e.target.value})}/>
                        <h1>{state.name}</h1>
                    </div>
                    <div className='ki'>
                
                <Button onClick={()=>dispatch({type:"RESET"})}>Reset</Button>
                </div>
                  </div>
              </div>
          </div>
      </div>


  </>
}

export default Reduser
