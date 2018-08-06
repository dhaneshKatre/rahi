import { 
    FROM_CHANGED, 
    TO_CHANGED, 
    PICKER_SUCCESS, 
    SWIPE_FROM_TO,
    TRAIN_FETCH_SUCCESS,
    CLEAR_DATA,
    PNR_CHANGED,
    TNO_CHANGED,
    PNR_FETCH_SUCCESS,
    TRAIN_INFO_SUCCESS
 } from '../actions/types';

const INITIAL_STATE = {
    from: "",
    to: "",
    dateTime: "",
    pnr: "",
    tno: "",
    trains: []
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
            return { ...state, trains: action.payload };
        case PNR_FETCH_SUCCESS: {
            console.log(action.payload);
        }
        case TRAIN_INFO_SUCCESS: {
            console.log(action.payload);
        }
        case CLEAR_DATA:
            return { ...state, trains: [] };
        case PNR_CHANGED:
            return { ...state, pnr: action.payload };
        case TNO_CHANGED:
            return { ...state, tno: action.payload };
        default:
            return state;
    }
}