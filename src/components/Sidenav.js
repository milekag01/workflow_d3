/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";

export default class Sidenav extends Component {
    render() {
        return (
            <div>
                <div className='side-nav'>
                    <div className='user-section'>
                        <a href='./profile.html'>
                            <img
                                className='circle'
                                src='http://www.gravatar.com/avatar/7ce728ca75993398f9f55da26096f26f?s=80&amp;d=mm&amp;r=g'
                            />
                            <p>milek</p>
                        </a>
                    </div>

                    <form
                        method='GET'
                        action='http://localhost:3000/search'
                        acceptCharset='UTF-8'
                    >
                        <div className='form-group search'>
                            <input
                                className='form-control search-bar'
                                placeholder='Search'
                                name='q'
                                type='text'
                            />
                        </div>
                    </form>

                    <div className='menu'>
                        <a className='false active' href='./hud.html'>
                            <i className='icon ion-ios-home' /> Hud
                        </a>
                        <a className='false' href='./client.html'>
                            <i className='icon ion-person' /> Clients
                        </a>
                        <a className='false' href='./profile.html'>
                            <i className='icon ion-gear-b' /> Settings
                        </a>
                        <a href='http://localhost:3000/logout'>
                            <i className='icon ion-android-exit' /> Logout
                        </a>
                    </div>

                    <div className='line'>
                        <hr />
                    </div>

                    <div className='footer'>
                        <p>COPYRIGHT 2020 &copy; Milek Agrawal</p>
                    </div>

                    {/* <script src="./assets/js/main.js"></script> */}
                </div>
            </div>
        );
    }
}
