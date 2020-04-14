/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="special-form">
                                <Link to="/">
                                    <img
                                      src="http://ribbbon.com/assets/img/logo.png"
                                      alt=""
                                    />
                                </Link>
                                <h3 className="text-center">LOGIN</h3>
                                <hr />
                                <form>
                                    <input
                                      name="_token"
                                      type="hidden"
                                    />
                                    <div className="form-group">
                                        <label
                                          htmlFor="email"
                                          className="color-primary"
                                        >
                                            Email:
                                        </label>
                                        <input
                                          className="form-control"
                                          placeholder="Email"
                                          autoFocus="true"
                                          name="email"
                                          type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                          htmlFor="password"
                                          className="color-primary"
                                        >
                                            Password:
                                        </label>
                                        <input
                                          className="form-control"
                                          placeholder="Password"
                                          name="password"
                                          type="password"
                                          value=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                          className="btn btn-primary btn-wide"
                                          type="submit"
                                          value="Login"
                                        />
                                    </div>
                                </form>
                                <p>
                                    Don't have an account?
                                    <Link to="/signup">
                                        register
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
