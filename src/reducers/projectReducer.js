/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import _ from "lodash";

// eslint-disable-next-line quotes
import { CREATE_PROJECT } from '../actions/types';
import { READ_PROJECT } from '../actions/types';
import { LIST_PROJECTS } from '../actions/types';
import { EDIT_PROJECT } from '../actions/types';
import { DELETE_PROJECT } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case LIST_PROJECTS:
            return { ...state, ..._.mapKeys(action.payload, "_id") };
        case CREATE_PROJECT:
            return { ...state, [action.payload._id]: action.payload };
        case READ_PROJECT:
            return { ...state, [action.payload._id]: action.payload };
        case EDIT_PROJECT:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_PROJECT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
