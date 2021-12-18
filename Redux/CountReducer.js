const initialState = {
  count: 0,
  title: 'this is a title',
};

const d = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT':
      return {
        ...state,
        title: action.mamtha,
      };
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'SUB':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
export default d;
