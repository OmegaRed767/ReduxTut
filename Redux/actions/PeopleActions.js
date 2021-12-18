import {API_CALL, API_SUCCESS, API_FAIL} from './Types';

export const Api_Call = () => {
  return {
    type: API_CALL,
  };
};

export const Api_Success = data => {
  return {
    type: API_SUCCESS,
    mamtha: data,
  };
};

export const API_Fail = () => {
  return {
    type: API_FAIL,
  };
};

export const Fetch_Ppl = () => {
  return dispatch => {
    // for loader
    dispatch(Api_Call);
    fetch('https://randomuser.me/api/?seed=${seed}&page=${page}&results=20')
      .then(res => res.json())
      .then(x => {
        dispatch(Api_Success(x.results));
      })
      .catch(e => {
        dispatch(API_Fail());
      });
  };
};
