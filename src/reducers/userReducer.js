/* eslint-disable quotes */
import _ from "lodash";

import { CREATE_USER } from '../actions/types';
import { READ_USER } from '../actions/types';
import { EDIT_USER } from '../actions/types';
import { DELETE_USER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
    case CREATE_USER:
        return { ...state, [action.payload._id]: action.payload };
    case READ_USER:
        return { ...state, [action.payload._id]: action.payload };
    case EDIT_USER:
        return { ...state, [action.payload._id]: action.payload };
    case DELETE_USER:
        return _.omit(state, action.payload);
    default:
        return state;
    }
};
