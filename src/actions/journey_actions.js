import { FROM_CHANGED, TO_CHANGED, PICKER_SUCCESS, SWIPE_FROM_TO } from './types';

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
