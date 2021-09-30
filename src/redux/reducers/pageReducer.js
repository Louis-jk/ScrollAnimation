import types from '../actions/types';

const defaultState = {
  isView: false,
  selectType: 0,
};

const pageReducer = (state = defaultState, action) => {
  // For Debugger
  // console.log(state);

  switch (action.type) {
    case types.SET_TAB02:
      return {
        ...state,
        isView: action.payload,
      };
    case types.SET_TAB02_TYPE:
      return {
        ...state,
        selectType: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
