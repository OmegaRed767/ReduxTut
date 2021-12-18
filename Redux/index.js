import CounterReducer from './CountReducer';
import PeopleReducer from './PeopleReducer';

import {combineReducers} from 'redux';

export default data = combineReducers({
  a: CounterReducer,
  b: PeopleReducer,
});
