import types from './types';

export function setTab02View(boolean) {
  return {
    type: types.SET_TAB02,
    payload: boolean,
  };
}

export function setTab02Type(num) {
  return {
    type: types.SET_TAB02_TYPE,
    payload: num,
  };
}
