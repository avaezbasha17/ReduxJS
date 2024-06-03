import axios from 'axios';
import studentSlice from './studentSlice'

export const LOCALHOST = `http://localhost:4002`

const action = studentSlice.actions;

export const fetchStudent = () => {
    return (dispatch) => {
        dispatch(action.fetchStudentRequest())
        return axios.get(`${LOCALHOST}/getStudent`)
            .then(res => dispatch(action.fetchStudentSuccess(res.data)))
            .catch(err => dispatch(action.fetchStudentFailure(err.message)))
    }
}

export const addStudent = ({ name, grade, medium, section }) => {
    return (dispatch) => {
        dispatch(action.addStudentRequest())
        return axios.post(`${LOCALHOST}/addStudent`, { name, grade, medium, section })
            .then(res => dispatch(action.addStudentSuccess(res.data)))
            .catch(err => dispatch(action.addStudentFailure(err.message)))
    }
}

export const findStudentName = ({ name }) => {
    return (dispatch) => {
        dispatch(action.findStudentRequest())
        return axios.get(`${LOCALHOST}/getByName?name=${name}`)
            .then(payload => dispatch(action.findStudentSuccess(payload.data)))
            .catch(error => dispatch(action.findStudentFailure(error.message)))
    }
}

export const findByIdStudent = ({ id }) => {
    return dispatch => {
        dispatch(action.findStudentByIdRequest())
        return axios.get(`${LOCALHOST}/findById?id=${id}`)
            .then(payload => dispatch(action.findStudentByIdSuccess(payload.data)))
            .catch(error => dispatch(action.findStudentByIdFailure(error.message)))
    }
}

export const updateStudent = ({ id, name, grade, medium, section }) => {
    return dispatch => {
        dispatch(action.updateStudentRequest())
        return axios.post(`${LOCALHOST}/updateStudent`, { id, name, grade, medium, section })
            .then(payload => dispatch(action.updateStudentSuccess(payload.data)))
            .catch(error => dispatch(action.updateStudentFailure(error.message)))
    }
}

export const deleteStudent = ({ id }) => {
    return dispatch => {
        dispatch(action.deleteStudentRequest())
        return axios.get(`${LOCALHOST}/deleteStudent?id=${id}`)
            .then(res => dispatch(action.deleteStudentSuccess(res.data)))
            .catch(err => dispatch(action.deleteStudentFailure(err.message)))
    }
}