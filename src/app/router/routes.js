import Homepage from '../components/Homepage';
import Companies from '../components/Companies';
import Company from '../components/Company';
import StudentFormWrapper from '../components/StudentFormWrapper';
import Students from '../components/Students';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage
  },
  {
    path: '/companies',
    exact: true,
    component: Companies
  },
  {
    path: '/student',
    component: StudentFormWrapper
  },
  {
    path: '/companies/:id',
    component: Company
  },
  {
    path: '/students',
    exact: true,
    component: Students
  }
];

export default routes;
