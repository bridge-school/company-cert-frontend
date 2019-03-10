import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import companyReducer from './companyReducer';
import companiesReducer from './companiesReducer';
import frontendData from './frontendDataReducer';
import studentReducer from './studentReducer';
import studentsReducer from './studentsReducer';

const reducer = combineReducers({
  form: formReducer,
  frontendData,
  company: companyReducer,
  companies: companiesReducer,
  student: studentReducer,
  students: studentsReducer
});

export default reducer;
