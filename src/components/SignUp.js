/* eslint-disable indent */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <div className='special-form'>
                                <Link to='/'>
                                    <img
                                      src='http://ribbbon.com/assets/img/logo.png'
                                      alt=''
                                    />
                                </Link>
                                <h3 className='text-center'>REGISTER</h3>
                                <hr />
                                <form>
                                    <input
                                      name='_token'
                                      type='hidden'
                                    />
                                    <div className='form-group'>
                                        <label
                                          for='fullName'
                                          className='color-primary'
                                        >
                                            Full Name:
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Full name'
                                          autofocus='true'
                                          name='fullName'
                                          type='text'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                          for='email'
                                          className='color-primary'
                                        >
                                            Email:
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Email'
                                          name='email'
                                          type='text'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                          for='password'
                                          className='color-primary'
                                        >
                                            Password:
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Password'
                                          name='password'
                                          type='password'
                                          value=''
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                          className='btn btn-primary btn-wide'
                                          type='submit'
                                          value='Register'
                                        />
                                    </div>
                                </form>
                                <p>
                                    Have an account?
                                    <Link to='/login'>login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
