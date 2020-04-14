/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class Sidenav extends Component {
    render() {
        return (
            <div>
                <div className='side-nav'>
                    <div className='user-section'>
                        <Link to='/profile'>
                            <img
                                className='circle'
                                src='http://www.gravatar.com/avatar/7ce728ca75993398f9f55da26096f26f?s=80&amp;d=mm&amp;r=g'
                            />
                            <p>milek</p>
                        </Link>
                    </div>

                    <form>
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
                        <Link to='/hud' className='false active'>
                            <i className='icon ion-ios-home' /> Hud
                        </Link>
                        <Link to='/clients' className='false'>
                            <i className='icon ion-person' /> Clients
                        </Link>
                        <Link to='/profile' className='false'>
                            <i className='icon ion-gear-b' /> Settings
                        </Link>
                        <Link to='/signout'>
                            <i className='icon ion-android-exit' /> Logout
                        </Link>
                    </div>

                    <div className='line'>
                        <hr />
                    </div>

                    <div className='footer'>
                        <p>COPYRIGHT 2020 &copy; Milek Agrawal</p>
                    </div>
                </div>
            </div>
        );
    }
}
