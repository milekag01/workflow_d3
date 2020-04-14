/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class InvitedProjectHud extends Component {

    const projectList = () => {
        if(this.props.projects.length>0) {
            return (
                <div>
                    <h4>Projects Shared With Me</h4>
                    <input
                        placeholder='Search projects'
                        type='text'
                        className='form-control'
                    />
                    <hr />
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.projects.forEach((project, index) => {
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Link to={`/projects/${project._id}`}>
                                            {project.name}
                                        </Link>
                                    </td>
                                    <td>
                                        <div className='progress'>
                                            <div
                                                className='progress-bar'
                                                role='progressbar'
                                                style={`width:${
                                                    (project.completedWeight /
                                                        project.totalWeight) *
                                                    100
                                                }%`}
                                            />
                                        </div>
                                    </td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div>
                    <p className='alert alert-warning'>
                    Projects that you have been invited to will show up
                    here. Currently you have not been invited to any
                    project.
                    </p>
                </div>
            )
        }
    }
    render() {
        return (
            <div className='col-xs-6'>
                <div className='project-list-container'>
                    {this.projectList()}
                </div>
            </div>
        );
    }
}
