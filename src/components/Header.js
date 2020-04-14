/* eslint-disable react/jsx-indent */
import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div id='sheet' className='animated' />

                <div id='pop-up-prompt' className='animated'>
                    <header>
                        <h3 className='color-badge' />
                    </header>
                    <div>
                        <p />
                        <section>
                            <span id='cancel-btn' className='btn' />
                            <span id='confirm-btn' className='btn' />
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
