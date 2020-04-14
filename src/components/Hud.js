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
                    <div class="row">
                        <div class="col-xs-12 page-title-section">
                            <h1 class="pull-left">Hud</h1>
                        </div>
                    </div>
                    <div className="row" id="hud">
                        <InfoCard />
                        <InfoCard />
                        <InfoCard />
                        <MyProjectHud />
                        <InvitedProjectHud />
                    </div>
                </ContentArea>
            </div>
        );
    }
}
