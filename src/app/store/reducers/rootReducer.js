import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import companyReducer from './companyReducer';
import frontendData from './frontendDataReducer';

const reducer = combineReducers({
  form: formReducer,
  frontendData,
  companyReducer
});

export default reducer;
