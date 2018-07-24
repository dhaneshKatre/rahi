import { 
    FROM_CHANGED, 
    TO_CHANGED, 
    PICKER_SUCCESS, 
    SWIPE_FROM_TO,
    TRAIN_FETCH_SUCCESS,
    LOADING_CHANGED,
    CLEAR_DATA
} from './types';
import axios from 'axios';

export const fromChanged = (text) => {
    return {
        type: FROM_CHANGED,
        payload: text
    };
};

export const toChanged = (text) => {
    return {
        type: TO_CHANGED,
        payload: text
    };
};

export const swipeFromTo = (from, to) => {
    return {
        type: SWIPE_FROM_TO,
        payload: {from, to}
    }
}

export const pickerSuccess = (text) => {
    return {
        type: PICKER_SUCCESS,
        payload: text
    };
};

const infoLoadChange = (dispatch, val) => {
    dispatch({
        type: LOADING_CHANGED,
        payload: val
    });
}

export const clearData = () => {
    return {
        type: CLEAR_DATA
    }
}

const trainsFetchedSuccess = (dispatch, info) => {
    dispatch({
        type: TRAIN_FETCH_SUCCESS,
        payload: info
    });
}

export const fetchTrains = (from, to, nav) => async dispatch => {
    try{
        infoLoadChange(dispatch, true);
        const config = {headers: {'Content-type': 'application/json'}};
        let res = await axios.post('https://railwayapi.herokuapp.com/getAllTrains', { from: from, to: to }, config);
        infoLoadChange(dispatch, false);
        trainsFetchedSuccess(dispatch, res.data.trains);
        nav();
    } catch(e){
        console.error(e);
    }
}
