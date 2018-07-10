import { FROM_CHANGED, TO_CHANGED, PICKER_SUCCESS, GET_DATE } from './types';

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

  export const pickerSuccess = (text) => {
    return {
        type: PICKER_SUCCESS,
        payload: text
    };
  };
