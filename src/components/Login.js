import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const bgStyle = {
    width: 'auto',
    height: 'auto',
    backgroundImage: `url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
    backgroundSize: 'cover'
}

class Login extends Component{
    state={
        showPassword: false
    }

    handleShowPassword = (props) => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }))
    }

    render(){
        return(
        <div style={bgStyle}>
            <div className="row">
                <div className="col-sm-3 mx-auto card shadow-lg p-3 bg-transparent rounded">
                <div className="card-body">
                <Link to="/">
                <img  src="" className="card-img-top" width="200px" length="200px" alt="Brand Logo"/>
                </Link>
                        <div className="card-title">
                        <h1 className="mb-3">Login</h1>
                        </div>
                        <form>

                            <div className="form-group">
                                <label for="loginEmail">
                                Email Address
                                </label>
                                <input type="email" 
                                className="form-control"
                                id="loginEmail" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"/>
                            </div>

                            <div className="form-group">
                                <label 
                                for="loginPassword">
                                Password
                                </label>
                                
                                <div className="input-group mb-3">
                            
                                <div className="input-group-append">
                                <input type={this.state.showPassword ? 'text' : 'password'} className="form-control" placeholder="Password" id="loginPassword" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                
                                <div class="input-group-append">
                                <button class="btn btn-outline-secondary" onClick={this.handleShowPassword} type="button"><i class={this.state.showPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i></button>
                              </div>
                            </div>
                            </div>
                            </div>
                            
                            
                            
                            


                            <div className="d-flex justify-content-center my-3">
                                <button type="submit" className="btn btn-success btn-block">
                                Login
                                </button>
                            </div>

                        </form>
                        Do not have an account? 
                        <Link to="/register"> Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Login