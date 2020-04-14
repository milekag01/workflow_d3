/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <div className='special-form'>
                                <a href='http://ribbbon.com'>
                                    <img
                                      src='http://ribbbon.com/assets/img/logo.png'
                                      alt=''
                                    />
                                </a>
                                <h3 className='text-center'>REGISTER</h3>
                                <hr />
                                <form
                                    method='POST'
                                    action='http://ribbbon.com/make'
                                    accept-charset='UTF-8'
                                >
                                    <input
                                        name='_token'
                                        type='hidden'
                                        value='BsrXVIdU5BsRaNQiw3blrJheQjyi4c41ojgKJ3g5'
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
                                    <a href='http://ribbbon.com/login'>login</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
