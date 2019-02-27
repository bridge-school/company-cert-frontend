import Homepage from '../components/Homepage';
import Companies from '../components/Companies';
import Company from '../components/Company';
import Student from '../components/Student';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage
  },
  {
    path: '/companies',
    component: Companies
  },
  {
    path: '/student',
    component: Student
  },
  {
    path: '/company',
    component: Company
  }
];

export default routes;
