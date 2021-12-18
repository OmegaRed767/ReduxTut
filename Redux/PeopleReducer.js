import {API_CALL, API_SUCCESS, API_FAIL} from '../Redux/actions/Types';
const initialState = {
  title: 'List of ppl',
  data: [],
  loading: false,
  error_msg: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'API_CALL':
      return {
        ...state,
        loading: true,
      };
    case 'API_SUCCESS':
      return {
        ...state,
        data: action.mamtha,
        loading: false,
      };
    case 'API_FAIL':
      return {
        ...state,
        error_msg: 'error while fetching api',
        loading: false,
      };
    default:
      return state;
  }
};
