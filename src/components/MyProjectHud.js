/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { Component } from "react";

export default class MyProjectHud extends Component {
    render() {
        return (
            <div className='col-xs-6'>
              <div className='project-list-container'>
                {/* <template v-if='projects.length > 0'> */}
                <h4>My Projects</h4>
                <input
                  placeholder='Search projects'
                  type='text'
                  className='form-control'
                  v-model='my_project_text'
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
                    <tr v-for='project in projects | filterBy my_project_text'>
                      <td>{$index + 1}</td>
                      <td>
                        <a href='http://localhost:3000/projects/{{ project.id }}'>
                          {Project - 1}
                        </a>
                      </td>
                      <td>
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            aria-valuenow='60'
                            aria-valuemin='0'
                            aria-valuemax='100'
                                                // eslint-disable-next-line jsx-quotes
                            style='width:{{ project.completedWeight / project.totalWeight * 100 }}%;'
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* </template> */}

                {/* <template v-if='projects.length == 0'> */}
                {/* <p className='alert alert-warning'>
                            Your projects will be listed here once you create
                            some. Create a new project within the
                            <a href='./client.html'>clients</a>
                            page.
                        </p> */}
                {/* </template> */}
              </div>
            </div>
        );
    }
}
