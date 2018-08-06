import { combineReducers } from 'redux';
import JourneyReducer from './JourneyReducer';
import auth from './AuthReducer';

export default combineReducers({
    auth,
    journey: JourneyReducer
});