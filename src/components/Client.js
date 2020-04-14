import React, { Component } from "react";
import ContentArea from "./ContentArea";
import Header from "./Header";
import Sidenav from "./Sidenav";

export default class Client extends Component {
    render() {
        return (
            <div>
                <Sidenav />

                <ContentArea>
                <div id="client">
                        <div class="row">
                            <div class="col-xs-12 page-title-section">
                                <h1 class="pull-left">Clients</h1>
                                <a
                                    class="btn btn-primary pull-right"
                                    title="Create new client"
                                >+ New Client</a>
                                <div class="clearfix"></div>
                            </div>
                        </div>

                        {/* <template v-if="clients.length != 0"> */}
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="mega-menu">
                                        <div class="links">
                                            <a
                                                v-for="client in clients"
                                                data-id="client_{{client.id}}"
                                                href=""
                                            >
                                                {{client.name}}
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div
                                                v-for="client in clients"
                                                class="item"
                                                id="client_{{client.id}}"
                                                title="Edit client"
                                            >
                                                <header>
                                                    <div
                                                        class="client client-info-{{$index}} page-title-section"
                                                    >
                                                        <h2 class="pull-left">
                                                            {{client.name}}
                                                            <a
                                                                v-on:click="startClientEditMode($index)"
                                                                class="show-on-hover btn btn-default"
                                                                title="Edit Client"
                                                                ><i class="ion-edit"></i
                                                            ></a>
                                                        </h2>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            <label
                                                                >Contact name:
                                                            </label>
                                                            {{client.point_of_contact}}
                                                        </p>
                                                        <p>
                                                            <label
                                                                >Contact number:
                                                            </label>
                                                            {{client.phone_number}}
                                                        </p>
                                                        <p>
                                                            <label
                                                                >Contact email:
                                                            </label>
                                                            <a
                                                                href="mailto:{{client.email}}"
                                                                >{{client.email}}</a
                                                            >
                                                        </p>
                                                    </div>
                                                </header>
                                                <hr />
                                                <span
                                                    v-on:click="showNewProjectForm(client.id, $index)"
                                                    title="Create new project"
                                                    class="btn btn-default pull-right"
                                                    >New Project</span
                                                >
                                                {/* <template
                                                    v-if="client.projects.length > 0"
                                                > */}
                                                    <h4>Projects</h4>
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <td>#</td>
                                                                <td>Name</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr
                                                                v-for="project in client.projects"
                                                            >
                                                                <td>
                                                                    {{ $index + 1 }}
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        href="http://ribbbon.com/projects/{{ project.id }}"
                                                                        >{{ project.name
                                                                        }}</a
                                                                    >
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                {/* </template> */}
                                                <br />
                                                <div class="clearfix"></div>
                                                <hr />
                                                <br /><br />
                                                <span
                                                    v-on:click="deleteClient(client, $index)"
                                                    class="btn btn-danger pull-right"
                                                    >Delete {{ client.name }}</span
                                                >
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </template> */}

                        {/* <template v-if="clients.length == 0"> */}
                            {/* <div class="clearfix"></div>
                            <p class="alert alert-warning">
                                Your clients will be listed here once you create some.
                                Create a new client
                                <a v-on:click="showCreateForm()">now</a>.
                            </p> */}
                        {/* </template> */}


                     
                    </div>
                </ContentArea>
            </div>
        );
    }
}
