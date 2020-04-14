import React, { Component } from "react";

export default class ProjectForm extends Component {

    const renderMsg = () => {
        // if creation || updation fails
        if(!this.props.project) {
            return (
                <span class="status-msg error-msg">
                    {this.props.project.msg.failure}
                </span>
            )
        }
        return (
            <span class="status-msg success-msg">
                { this.props.project.msg.success }
            </span>
        )
    }
    render() {
        return (
        <div>
            <div class="popup-form new-project">
                <header>
                    <p class="pull-left">New Project</p>
                    <div class="actions pull-right">
                        <i title="Minimze " class="ion-minus-round"></i>
                        <i title="Close" class="ion-close-round"></i>
                    </div>
                    <div class="clearfix"></div>
                </header>
                <section>
                    <form>
                        {this.renderMsg()}
                        <input
                            v-model="newProject.name"
                            placeholder="Name"
                            type="text"
                            class="form-control first"
                        />
                    </form>
                </section>
                <footer>
                    <a class="btn btn-primary pull-right">Save</a>
                    <div class="clearfix"></div>
                </footer>
            </div>
        </div>
            );
    }
}
