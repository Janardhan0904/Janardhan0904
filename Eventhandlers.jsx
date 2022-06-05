import React from 'react'

function Eventhandlers() {
  return (
    <div className='container mt-auto' >
        <div className='card bg-primary'>
            <div className='card-title'>
                <h1 className='display-4'>Event handlers</h1>
                </div>
                <div className='card-body'>
                    <h1 className='border-warning'></h1>
                </div>
              <button className='btn btn-primary btn-sm'>increment</button>  
              <button className='btn btn-warning btn-sm'>decrement</button>  
        </div>

    </div>
  )
}

export default Eventhandlers