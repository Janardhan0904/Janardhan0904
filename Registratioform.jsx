import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react'

const Registratioform = () => {
    const [state, setstate] = useState({
        user: {
            username: "",
            password: "",
            email: "",
            destination: "",
            bio: "",
            terms: false

        }
    });
    let { user } = state;
    let updatestate = (e) => {
        setstate((state) => ({
            user: {
                ...state.user, [e.target.name]: e.target.value
            }
        }));
        let checked = (e) => {
            setstate((state) => ({ 
                user: {
                     ...state.user,
                      [e.target.name]: [e.target.check]
                    }
                 }));
        };
        let submitloginform = (event) => {
            event.preventDefault();
            console.log(state.user);
            
        };
    }
    return (
        <React.Fragment>
            <pre>{JSON.stringify(state.user)}</pre>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-4'>

                        <div className='justify-content-center'>
                            <div className='container bg-gradient text-center text-primary'>
                                <div className='card bg-secondary'>
                                    <div className='card-title bg-success'><h4 className='text-info'> REGISTRATION FORM:-</h4></div>
                                    <div className='card-body bg-primary'>
                                        <form>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='enter name' name='username' value={user.username} onChange={updatestate} /><br />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="password" placeholder='enter password' name='password' value={user.password} onChange={updatestate} /><br />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="email" placeholder='enter email' name='email' value={user.email} onChange={updatestate} /><br />
                                            </div>
                                            <div className='mb-3'>
                                                <section name='destination' value={user.destination} onChange={updatestate} className="form-control" >
                                                    <option value="">select destination</option>
                                                    <option value="software">sft</option>
                                                    <option value="frontsoftware">ft</option>
                                                    <option value="backsoftware">bft</option>
                                                    <option value="fullstack">full</option>
                                                </section>
                                            </div>

                                            <div className='mb-3'>
                                                <textarea name='bio' value={user.bio} onChange={updatestate} row={4} className="form-control" placeholder='bio' />
                                            </div>
                                            <div className='mb-3'>
                                                <input  type="checkbox" name='terms'  className='form-control'value={user.terms}    />accept terms
                                            </div>
                                            <div className='mb-3'>
                                                <button className='btn btn-warning ' value="register">REGISTER</button> 
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Registratioform;