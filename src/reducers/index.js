import { combineReducers } from 'redux';
import JourneyReducer from './JourneyReducer';

export default combineReducers({
    auth: () => { return null },
    journey: JourneyReducer
});