import React, { Component } from "react";

export default class Login extends Component {
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
                            <h3 className='text-center'>LOGIN</h3>
                            <hr />
                            <form
                                  method='POST'
                                  action='http://localhost:3000/login'
                                    accept-charset='UTF-8'
                            >
                                <input
                                      name='_token'
                                      type='hidden'
                                      value='BsrXVIdU5BsRaNQiw3blrJheQjyi4c41ojgKJ3g5'
                                />
                                <div className='form-group'>
                                    <label
                                            for='email'
                                            class='color-primary'
                                    >
                                        Email:
                                        </label>
                                    <input
                                          className='form-control'
                                          placeholder='Email'
                                            autofocus='true'
                                          name='email'
                                          type='text'
                                    />
                                  </div>
                                <div className='form-group'>
                                    <label
                                            for='password'
                                            class='color-primary'
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
                                          value='Login'
                                    />
                                  </div>
                              </form>
                            <p>
                                Don't have an account?
                                  <a href='http://ribbbon.com/register'>
                                    register
                                  </a>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
