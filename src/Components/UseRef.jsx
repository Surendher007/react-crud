import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    let [name,setName] = useState()
    let count = useRef(0)

    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()

    useEffect(()=>{
        ++count.current
    })

    useEffect(()=>{
        ref1.current.focus()
    })
let reset = ()=>{
   
    ref1.current.value = ""
    ref2.current.value = ""
    ref3.current.value = ""
    ref4.current.value = ""

    ref1.current.focus()
}

let handleSubmit = ()=>{
    let otp = ref1.current.value + ref2.current.value + ref3.current.value + ref4.current.value
    if(otp.length === 4){
        alert(`otp ${otp} is succeful`)
        reset()
    }
    else{
        alert("invalid otp")
        reset()

    }
}

  return <>
   <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Use Ref</h1>
                  </div>
                  <div className="row">
                    <input onChange={(e)=>setName(e.target.value)}/>
                  </div>
              </div>
              <h2>{name}</h2>
              <div>
                <h2>{count.current}</h2>
              </div>

              <div className="row">
                <div>
              <input type="number" ref={ref1} onKeyUp={(e)=>{
                if(e.key>="0" && e.key<="9"){
                   ref2.current.focus()
                }
              } }/>&nbsp;&nbsp;
              <input type="number" ref={ref2} onKeyUp={(e)=>{
                    if(e.key>="0" && e.key<="9"){
                        ref3.current.focus()
                     }
            } }/>&nbsp;&nbsp;
              <input type="number" ref={ref3} onKeyUp={(e)=>{
                    if(e.key>="0" && e.key<="9"){
                        ref4.current.focus()
                     }
            } }/>&nbsp;&nbsp;
              <input type="number" ref={ref4} onKeyUp={(e)=>{
                handleSubmit()
            } }/>
            </div>
            </div>
          </div>
      </div>
  
  </>
}

export default UseRef
