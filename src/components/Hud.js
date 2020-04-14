/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import ContentArea from "./ContentArea";
import InfoCard from "./InfoCard";
import MyProjectHud from "./MyProjectHud";
import InvitedProjectHud from "./InvitedProjectHud";

export default class Hud extends Component {
    render() {
        return (
            <div>
                <ContentArea>
                    <div className='row'>
                        <div className='col-xs-12 page-title-section'>
                            <h1 className='pull-left'>Hud</h1>
                        </div>
                    </div>
                    <div className='row' id='hud'>
                        <InfoCard title='Clients' count={21} />
                        <InfoCard title='Projects' count={27} />
                        <InfoCard title='Tasks' count={342} />
                        <MyProjectHud />
                        <InvitedProjectHud />
                    </div>
                </ContentArea>
            </div>
        );
    }
}
