import {  UPDATE_FRONTEND_DATA } from '../constants'


const updateAllData = data => ({
    type: UPDATE_FRONTEND_DATA,
    data
})

const updateFrontendData = () => dispatch => {
    fetch(`frontend-data`)
        .then(res => res.json())
        .then(data => dispatch(updateAllData(data)))
};

export default updateFrontendData;