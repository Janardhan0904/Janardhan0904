import React, { useState } from 'react'
const Formhandle = () => {
    let [state, setstate] = useState({
        username: "",
        password: "",
    })
let inputchange = (e) => {
    setstate((state) => ({
            ...state, [e.target.name]: [e.target.value]
        }))

    }
    

return (
    <div>

        <div className='container "bg-success text-warning. '>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-headerbg-primary text-white">
                            <p className="h4">username</p>

                        </div>
                        <div className="card-body">
                            <form className='form-control'>
                                <div className="mb-3">
                                    <input type="text"
                                        value={state.username} name="username" onChange={inputchange} placeholder
                                        ="enter name" /><br />
                                    <input type="password" name='password' onChange={inputchange} placeholder="enter passord  " />
                                </div>
                                <p className="display-7">{state.username}</p>
                                <p className="display-7">{state.password}</p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
)
}
export default Formhandle;
