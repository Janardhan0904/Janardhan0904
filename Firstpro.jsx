import React, {useState } from 'react'
import bootstrap from 'bootstrap'

function Firstpro() {
  const [state, setstate] = useState({
    username: "",
    password: "",
    email: "",
  })
  let onchangein = e => {
    setstate((state) => ({ ...state, [e.target.name]: [e.target.value] }))
  }
    let submitform = e => {
      e.preventDefault()
      console.log(state)

    }

    return (
      <div>
        <center>
          <div className="container">
            <div className='card'>
              <div className='card-header'>onclick even</div>
              <div className='card-body'>
                <form onSubmit={submitform}>
                  <input type="text" placeholder='entername' value={state.username} name='username' onChange={onchangein} /><br />
                  <input type='password' placeholder='enter password ' value={state.password} name='password'onChange={onchangein} /><br />
                  <input type='email' placeholder='enter email' value={state.email} name='email' onChange={onchangein}/><br />
                 <button onclick={submitform} className="btn-primary">button</button>
                 </form>

              </div>
            </div>
          </div >
        </center>
      </div>
    )
  }

  export default Firstpro;