import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADMIN_URI } from '../../store/constants/const'
//import { register } from '../../store/reducers/authSlice'
import Dashboard from '../post/Post'

export default function Register() {

    const dispatch = useDispatch ()
    //const {isAuthenticated} = useSelector(userSelector)    

    const [inputState, setInputState] = useState({ name: 'phantin', email: 'abc@gmail.com', password: '123456' , confirmPassword: '123456'})
    const { name, email, password , confirmPassword  } = inputState   
    //=================================================================
    const onChangeHandle = (e) => {
        setInputState({ ...inputState, [e.target.name]: e.target.value })        
    }
    const onSubmitHandle =  async (e) => {                 
        e.preventDefault()      
         //dispatch(register(inputState) )                 
        //if (!result.success) {
            //console.log('result',  result.success)  
            //console.log(isAuthenticated)
            //setAlertState({ type: 'danger', message: result.message })
            //setTimeout(() => setAlertState(null), 5000) // bieens sau 3 giay
    //    }
    }
    //=================================================================
    if( localStorage.getItem('token') !==null) //if (!isAuthenticated || isAuthenticated === undefined)
        <Dashboard />        
    else     
    return (<>
        <h1> register </h1>
        <div className="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                        <div className="card-body">
                                            <form onSubmit={onSubmitHandle }>
                                                <div className="row mb-3">
                                                    <div className="col-md-12">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" 
                                                            name ='name' value={name} onChange={onChangeHandle}
                                                            />
                                                            <label htmlFor="inputFirstName">Full name</label>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" 
                                                    name ='email' value={email} onChange={onChangeHandle}
                                                    />
                                                    <label htmlFor="inputEmail">Email address</label>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-12">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" 
                                                            name ='password' value={ password} onChange={onChangeHandle}
                                                            />
                                                            <label htmlFor="inputPassword">Password</label>
                                                        </div>
                                                    </div>                                                    
                                                </div>

                                                <div className="row mb-3">
                                                    <div className="col-md-12">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="inputConfirmPassword" type="password" placeholder="Create a password"
                                                            name ='confirmPassword' value={confirmPassword} onChange={onChangeHandle}
                                                            />
                                                            <label htmlFor="inputPassword">Confirm Password</label>
                                                        </div>
                                                    </div>                                                    
                                                </div>

                                                <div className="mt-4 mb-0">
                                                    <div className="d-grid"><Link className="btn btn-primary btn-block" to ={`/${ADMIN_URI}/dashboard`}
                                                    
                                                    >Create Account</Link></div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><Link to ={`/${ADMIN_URI}/login`}>Have an account? Go to login</Link></div>
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

