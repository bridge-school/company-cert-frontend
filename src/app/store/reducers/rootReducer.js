import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import companyReducer from './companyReducer';

const reducer = combineReducers({
  form: formReducer,
  companyReducer
});

export default reducer;
