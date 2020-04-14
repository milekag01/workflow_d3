import React, { Component } from "react";

export default class ContentArea extends Component {
    render() {
        // eslint-disable-next-line react/prop-types
        return <div className='content-area'>{this.props.children}</div>;
    }
}
