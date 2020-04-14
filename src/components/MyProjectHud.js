/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MyProjectHud extends Component {

	const projectList = () => {
		if(this.props.projects.length>0) {
			return (
				<div>
				<h4>My Projects</h4>
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
												// eslint-disable-next-line jsx-quotes
							style={`width:${
							(project.completedWeight /
								project.totalWeight) *100}%`}
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
				Your projects will be listed here once you create some.
				Create a new project within the
				<Link to='/clients/new'>Client</Link>
				page.
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
