/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
export default class InfoCard extends Component {
    render() {
        return (
            <div>
                <div className='col-xs-12 col-sm-4'>
                    <div className='jumbotron text-center'>
                        <p className='dim'>{this.props.title}</p>
                        <h1>{this.props.count}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
