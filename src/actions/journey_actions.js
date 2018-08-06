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


export const pnrChanged = (text) => {
    return {
        type: PNR_CHANGED,
        payload: text
    };
};

export const tnoChanged = (text) => {
    return {
        type: TNO_CHANGED,
        payload: text
    };
};

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
        const config = {headers: {'Content-type': 'application/json'}};
        let res = await axios.post('https://railwayapi.herokuapp.com/getAllTrains', { from: from, to: to }, config);
        trainsFetchedSuccess(dispatch, res.data.trains);
        nav();
    } catch(e){
        console.error(e);
    }
}

const PNRFetchedSuccess = (dispatch, info) => {
    dispatch({
        type: PNR_FETCH_SUCCESS,
        payload: info
    });
}

export const getPnr = (pnr, nav) => async dispatch => {
    try {
        const config = {headers: {'Content-type': 'application/json'}};
        let res = await axios.post('https://railwayapi.herokuapp.com/getPNR', { pnr: pnr}, config);
        PNRFetchedSuccess(dispatch, res.data);
        nav();
    } catch(e){
        console.error(e);
    }
}

const trainFetchedSuccess = (dispatch, data) => {
    dispatch({
        type: TRAIN_INFO_SUCCESS,
        payload: data
    });
}

export const getTrain = (train_no, nav) => async dispatch => {
    try {
        const config = {headers: {'Content-type': 'application/json'}};
        let res = await axios.post('https://railwayapi.herokuapp.com/getTrain', { train_no: train_no }, config);
        console.log(res);
        trainFetchedSuccess(dispatch, res.data);
        nav();
    } catch (e) {
        console.error(e);
    }
}
