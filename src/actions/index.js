import workflow from "../apis/workflow";
import history from "../history";

import LOGIN_USER from "./types";
import LOGOUT_USER from "./types";
// import LOGOUT_USER_ALL from "./types";

import CREATE_USER from "./types";
import READ_USER from "./types";
import EDIT_USER from "./types";
import DELETE_USER from "./types";

import CREATE_CLIENT from "./types";
import READ_CLIENT from "./types";
import LIST_CLIENTS from "./types";
import EDIT_CLIENT from "./types";
import DELETE_CLIENT from "./types";
import ADD_CLIENT_OWNER from "./types";
import REMOVE_CLIENT_OWNER from "./types";

import CREATE_PROJECT from "./types";
import READ_PROJECT from "./types";
import LIST_PROJECTS from "./types";
import EDIT_PROJECT from "./types";
import DELETE_PROJECT from "./types";

// const token = "sampleToken123";
const token = localStorage.getItem("token");
const headerConfig = {
    headers: { Authorization: `Bearer ${token}` },
};

// AUTH

export const loginUser = (formValues) => async (dispatch) => {
    const response = await workflow.post("/users/login", formValues);

    localStorage.setItem("token", response.token);
    dispatch({
        type: LOGIN_USER,
        payload: response.user,
    });
    history.push("/dashboard");
};

export const logoutUser = () => async (dispatch) => {
    const response = await workflow.post("/users/logout", headerConfig);

    localStorage.removeItem("token");
    dispatch({
        type: LOGOUT_USER,
        payload: response.data,
    });
    history.push("/");
};

// export const logoutUserAll = () => async (dispatch) => {
//     const response = await workflow.post("/users/logoutAll", headerConfig);

//     dispatch({
//         type: LOGOUT_USER_ALL,
//         payload: response,
//     });
//     history.push("/");
// };

// USERS

export const createUser = (formValues) => async (dispatch) => {
    const response = await workflow.post("/users", formValues);

    dispatch({
        type: CREATE_USER,
        payload: response,
    });
    history.push("/login");
};

export const readUser = () => async (dispatch) => {
    const response = await workflow.get("/users/me", headerConfig);

    dispatch({
        type: READ_USER,
        payload: response,
    });
    history.push("/profile");
};

export const editUser = (formValues) => async (dispatch) => {
    const response = await workflow.patch(
        "/users/me",
        formValues,
        headerConfig
    );

    dispatch({
        type: EDIT_USER,
        payload: response,
    });
    history.push("/profile");
};

export const deleteUser = () => async (dispatch) => {
    const response = await workflow.delete("/users/me", headerConfig);

    dispatch({
        type: DELETE_USER,
        payload: response,
    });
    history.push("/");
};

// CLIENTS

export const createClient = (formValues) => async (dispatch) => {
    const response = await workflow.post("/clients", formValues, headerConfig);

    dispatch({
        type: CREATE_CLIENT,
        payload: response,
    });
    history.push("/clients");
};

export const readClient = (id) => async (dispatch) => {
    const response = await workflow.get(`/clients/${id}`, headerConfig);

    dispatch({
        type: READ_CLIENT,
        payload: response,
    });
    // history.push("/profile");
};

export const listClients = () => async (dispatch) => {
    const response = await workflow.get("/clients", headerConfig);

    dispatch({
        type: LIST_CLIENTS,
        payload: response,
    });
    // history.push("/profile");
};

export const editClient = (id, formValues) => async (dispatch) => {
    const response = await workflow.patch(
        `/clients/${id}`,
        formValues,
        headerConfig
    );

    dispatch({
        type: EDIT_CLIENT,
        payload: response,
    });
    history.push("/clients");
};

export const deleteClient = (id) => async (dispatch) => {
    const response = await workflow.delete(`/clients/${id}`, headerConfig);

    dispatch({
        type: DELETE_CLIENT,
        payload: response,
    });
    history.push("/clients");
};

export const AddClientOwner = (id, formValue) => async (dispatch) => {
    const response = await workflow.post(
        `/clients/${id}/addowner`,
        formValue,
        headerConfig
    );

    dispatch({
        type: ADD_CLIENT_OWNER,
        payload: response,
    });
    history.push(`/clients/${id}`);
};

export const RemoveClientOwner = (id, formValue) => async (dispatch) => {
    const response = await workflow.delete(
        `/clients/${id}/removeowner`,
        formValue,
        headerConfig
    );

    dispatch({
        type: REMOVE_CLIENT_OWNER,
        payload: response,
    });
    history.push(`/clients/${id}`);
};

// PROJECTS

export const createProject = (id, formValues) => async (dispatch) => {
    const response = await workflow.post(
        `/clients${id}/projects`,
        formValues,
        headerConfig
    );

    dispatch({
        type: CREATE_PROJECT,
        payload: response,
    });
    history.push(`/clients/${id}`);
};

export const readProject = (pid) => async (dispatch) => {
    const response = await workflow.get(
        `/clients/projects/${pid}`,
        headerConfig
    );

    dispatch({
        type: READ_PROJECT,
        payload: response,
    });
    // history.push("/profile");
};

export const listProjects = (cid) => async (dispatch) => {
    const response = await workflow.get(
        `/clients/${cid}/projects`,
        headerConfig
    );

    dispatch({
        type: LIST_PROJECTS,
        payload: response,
    });
    // history.push("/profile");
};

export const editProject = (pid, formValues) => async (dispatch) => {
    const response = await workflow.patch(
        `/clients/projects/${pid}`,
        formValues,
        headerConfig
    );

    dispatch({
        type: EDIT_PROJECT,
        payload: response,
    });
    history.push("/projects");
};

export const deleteProject = (cid, pid) => async (dispatch) => {
    const response = await workflow.delete(
        `/clients/${cid}/projects/${pid}`,
        headerConfig
    );

    dispatch({
        type: DELETE_PROJECT,
        payload: response,
    });
    history.push("/projects");
};
