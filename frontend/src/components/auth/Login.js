import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ADMIN_URI } from '../../store/constants/const';

import { useSelector, useDispatch } from 'react-redux'
//import {   getCurrentUser, login, userSelector } from '../../store/reducers/authSlice';
// import Dashboard from '../post/Post';
import { login } from '../../store/actions/AuthAction';
import { authSelector } from '../../store/reducers/AuthReducer';



export default function Login() {

    const navigator = useNavigate()

    const dispatch = useDispatch()
    const { users } = useSelector(authSelector)

    const [inputState, setInputState] = useState({ email: 'abc@gmail.com', password: '123456' })
    const { email, password } = inputState
    //=================================================================
    const onChangeHandle = (e) => {
        setInputState({ ...inputState, [e.target.name]: e.target.value })
    }
    const onSubmitHandle = async (e) => {
        e.preventDefault()
        dispatch(await login(inputState))
        //if (!result.success) {
        //console.log('result',  result.success)  
        //console.log(isAuthenticated)
        //setAlertState({ type: 'danger', message: result.message })
        //setTimeout(() => setAlertState(null), 5000) // bieens sau 3 giay
        //    }
    }
    //=================================================================
    // if (localStorage.getItem('token') !== null) //if (!isAuthenticated || isAuthenticated === undefined)        
    // {
    //     console.log('ok')
    //     return navigator('/dashboard')

    //     //  <Dashboard />
    // }
    // else
        return (<>

            <div className="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                            <div className="card-body">
                                                <form onSubmit={onSubmitHandle}>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com"
                                                            name='email' value={email} onChange={onChangeHandle}
                                                        />
                                                        <label htmlFor="inputEmail">Email address</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputPassword" type="password" placeholder="Password"
                                                            name='password' value={password} onChange={onChangeHandle}
                                                        />
                                                        <label htmlFor="inputPassword">Password</label>
                                                    </div>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" defaultValue />
                                                        <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <a className="small" href="password.html">Forgot Password?</a>
                                                        <Link className="btn btn-primary"
                                                            to={`/${ADMIN_URI}/dashboard`}
                                                            onClick={onSubmitHandle} > Login </Link>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><Link to={`/${ADMIN_URI}/register`} > Need an account? Sign up! </Link></div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>)
}

