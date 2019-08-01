import React, { Component } from 'react'
import { Link }from 'react-router-dom'

const bgStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
    backgroundSize: 'cover',
    alignSelf: 'stretch'
}



class Register extends Component{
    
    render(){
        return(
                <div className="container-fluid" style={bgStyle}>
                    <div className="row" >
                        <div className="col-sm-6 " >
                        
                        </div>
                        <div className="col-sm-6  ">
                        <div className = 'mx-auto card'>
                        <div className = 'card-body'>
                            <div className = ' border-bottom border-secondary card-title'>
                                <h1>Register</h1>
                            </div>

                            <div className='card-title'>
                                <h4>Username</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control' type='text'
                                    ref={(input) => {this.username = input}}
                                />
                            </form>

                            <div className='card-title'>
                                <h4>Email</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control'
                                    ref={(input) => {this.email = input}}
                                />
                            </form>

                            <div className='card-title'>
                                <h4>Password</h4>
                            </div>
                            <form className='input-group'>
                                <input className='form-control' type='password'
                                    ref={(input) => {this.password = input}}
                                />
                            </form>

                            <button onClick={this.onButtonClick} className='btn btn-success'>Click for Register</button>
                            <p>Sudah memiliki akun ? <Link to="/login" >Login disini</Link></p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Register