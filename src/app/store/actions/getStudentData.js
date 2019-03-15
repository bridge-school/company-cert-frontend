import { GET_STUDENT_SUCCESS, GET_STUDENT_FAILURE, BASE_URL, GET_MATCHES } from '../constants';

const getStudentSuccess = data => ({
  type: GET_STUDENT_SUCCESS,
  payload: data
});

const getStudentFailure = data => ({
  type: GET_STUDENT_FAILURE,
  error: data
});

const getMatches = data => ({
  type: GET_MATCHES,
  payload: data
});

const matchStudentAndCompanies = (student, companies) => {
  const studentTech = student.tech.map(tech => tech.value);
  const studentIndustry = student.industry.map(industry => industry.value);
  const matchingCompanies = companies
    .map(company => {
      const { tech, industry } = company;

      const techMatch = tech.filter(companyTech => studentTech.includes(companyTech.value));
      const industryMatch = industry.filter(companyIndustry =>
        studentIndustry.includes(companyIndustry.value)
      );

      return { ...company, techMatch, industryMatch };
    })
    .filter(company => company.techMatch.length > 0 && company.industryMatch.length > 0);

  return matchingCompanies;
};

const getStudentData = studentId => dispatch => {
  fetch(`${BASE_URL}/students/${studentId}`)
    .then(response => response.json())
    .then(studentJson => {
      dispatch(getStudentSuccess(studentJson));
      fetch(`${BASE_URL}/companies?filter=certified`)
        .then(response => response.json())
        .then(companiesJson => {
          const companies = companiesJson.data;
          dispatch(getMatches(matchStudentAndCompanies(studentJson, companies)));
        });
    })
    .catch(error => {
      console.log('Error GETting the student: ', error);
      dispatch(getStudentFailure(error));
    });
};

export default getStudentData;
