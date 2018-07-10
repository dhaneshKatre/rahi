import { FROM_CHANGED, TO_CHANGED, PICKER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    from: "",
    to: "",
    dateTime: ""
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FROM_CHANGED:
            return { ...state, from: action.payload };
        case TO_CHANGED:
            return { ...state, to: action.payload };
        case PICKER_SUCCESS:
            return { ...state, dateTime: action.payload };
        default:
            return state;
    }
}