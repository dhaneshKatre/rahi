import { 
    FROM_CHANGED, 
    TO_CHANGED, 
    PICKER_SUCCESS, 
    SWIPE_FROM_TO,
    TRAIN_FETCH_SUCCESS,
    LOADING_CHANGED,
    CLEAR_DATA
 } from '../actions/types';

const INITIAL_STATE = {
    from: "",
    to: "",
    dateTime: "",
    trains: [],
    isInfoLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FROM_CHANGED:
            return { ...state, from: action.payload };
        case TO_CHANGED:
            return { ...state, to: action.payload };
        case PICKER_SUCCESS:
            return { ...state, dateTime: action.payload };
        case SWIPE_FROM_TO:
            return { ...state, from: action.payload.to, to: action.payload.from };
        case TRAIN_FETCH_SUCCESS:
            return {...state, trains: action.payload };
        case LOADING_CHANGED:
            return { ...state, isInfoLoading: action.payload };
        case CLEAR_DATA:
            return { ...state, trains: [] };
        default:
            return state;
    }
}