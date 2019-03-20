import { GET_STUDENTS_SUCCESS, GET_STUDENTS_FAILURE, BASE_URL } from '../constants';

const getStudentsDataSuccessAction = data => ({
  type: GET_STUDENTS_SUCCESS,
  data
});

const getStudentsDataFailureAction = data => ({
  type: GET_STUDENTS_FAILURE,
  data
});

const getStudentsData = () => dispatch => {
  fetch(`${BASE_URL}/students`)
    .then(response => response.json())
    .then(json => {
      const students = json;

      // sort alphabetically by last name
      students.sort((a, b) => {
        const splitA = a.name.split(' ');
        const splitB = b.name.split(' ');
        const lastA = splitA[splitA.length - 1].toLowerCase(); // get the last word of the name, ignore upper and lowecase
        const lastB = splitB[splitB.length - 1].toLowerCase(); // get the last word of the name, ignore upper and lowecase

        if (lastA < lastB) {
          return -1;
        }
        if (lastA > lastB) {
          return 1;
        }
        return 0;
      });

      return dispatch(getStudentsDataSuccessAction(students));
    })
    .catch(error => {
      console.log('Error GETting the student list: ', error);
      dispatch(getStudentsDataFailureAction(error));
    });
};

export default getStudentsData;
