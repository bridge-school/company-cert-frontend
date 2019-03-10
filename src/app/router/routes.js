import Homepage from '../components/Homepage';
import Companies from '../components/Companies';
import Company from '../components/Company';
import AddStudent from '../components/AddStudent';
import Student from '../components/Student';
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
    component: AddStudent
  },
  {
    path: '/companies/:id',
    component: Company
  },
  {
    path: '/students',
    exact: true,
    component: Students
  },
  {
    path: '/students/:id',
    component: Student
  }
];

export default routes;
