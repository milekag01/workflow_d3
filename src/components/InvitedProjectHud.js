import React, { Component } from "react";

export default class InvitedProjectHud extends Component {
    render() {
        return (
			<div className="col-xs-6">
				<div className="project-list-container">
					
					{/* <template v-if="sharedProjects.length > 0"> */}
						<h4>Projects Shared With Me</h4>
						<input
							placeholder="Search projects"
							type="text"
							className="form-control"
							v-model="my_sproject_text"
						/>
						<hr />
						<table className="table table-striped">
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Progress</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="project in sharedProjects | filterBy my_sproject_text"
								>
									<td>{{ $index + 1 }}</td>
									<td>
										<a
											href="http://ribbbon.com/projects/{{ project.id }}"
											>{ project.name }</a
										>
									</td>
									<td>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="60"
												aria-valuemin="0"
												aria-valuemax="100"
												style="width:{{ project.completedWeight / project.totalWeight * 100 }}%;"
											></div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					{/* </template> */}

					{/* <template v-if="sharedProjects.length == 0"> */}
						{/* <p className="alert alert-warning">
							Projects that you have been invited to will show
							up here. Currently you have not been invited to
							any project.
						</p> */}
					{/* </template> */}
				</div>
			</div>
		);
    }
}
