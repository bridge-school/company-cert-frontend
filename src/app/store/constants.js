export const POST_COMPANY_SUCCESS = 'POST_COMPANY_SUCCESS';
export const POST_COMPANY_FAILURE = 'POST_COMPANY_FAILURE';
export const RESET_COMPANY_DATA = 'RESET_COMPANY_DATA';
export const UPDATE_FRONTEND_DATA = 'UPDATE_FRONTEND_DATA';
export const GET_COMPANY_DATA_SUCCESS = 'GET_COMPANY_DATA_SUCCESS';
export const GET_COMPANY_DATA_FAILURE = 'GET_COMPANY_DATA_FAILURE';
export const GET_COMPANIES_DATA_SUCCESS = 'GET_COMPANIES_DATA_SUCCESS';
export const GET_COMPANIES_DATA_FAILURE = 'GET_COMPANIES_DATA_FAILURE';
export const SHOW_CERTIFIED_COMPANIES = 'SHOW_CERTIFIED_COMPANIES';
export const SHOW_ALL_COMPANIES = 'SHOW_ALL_COMAPNIES';

export const POST_STUDENT_SUCCESS = 'POST_STUDENT_SUCCESS';
export const POST_STUDENT_FAILURE = 'POST_STUDENT_FAILURE';
export const RESET_STUDENT_DATA = 'RESET_STUDENT_DATA';
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const GET_STUDENTS_FAILURE = 'GET_STUDENTS_FAILURE';

export const GET_STUDENT_SUCCESS = 'GET_STUDENT_SUCCESS';
export const GET_STUDENT_FAILURE = 'GET_STUDENT_FAILURE';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081'
    : 'http://company-cert-backend.bridgeschoolapp.io';
