import axios from 'axios';

export const LOCALHOST = `http://localhost:4002`

export const FETCH_STUDENT_REQUEST = `FETCH_STUDENT_REQUEST`
export const FETCH_STUDENT_SUCCESS = `FETCH_STUDENT_SUCCESS`
export const FETCH_STUDENT_FAILURE = `FETCH_STUDENT_FAILURE`
export const ADD_STUDENT_REQUEST = `ADD_STUDENT_REQUEST`
export const ADD_STUDENT_SUCCESS = `ADD_STUDENT_SUCCESS`
export const ADD_STUDENT_FAILURE = `ADD_STUDENT_FAILURE`
export const FIND_STUDENT_REQUEST = `FIND_STUDENT_REQUEST`
export const FIND_STUDENT_SUCCESS = `FIND_STUDENT_SUCCESS`
export const FIND_STUDENT_FAILURE = `FIND_STUDENT_FAILURE`
export const DELETE_STUDENT_REQUEST = `DELETE_STUDENT_REQUEST`
export const DELETE_STUDENT_SUCCESS = `DELETE_STUDENT_SUCCESS`
export const DELETE_STUDENT_FAILURE = `DELETE_STUDENT_FAILURE`
export const UPDATE_STUDENT_REQUEST = `UPDATE_STUDENT_REQUEST`
export const UPDATE_STUDENT_SUCCESS = `UPDATE_STUDENT_SUCCESS`
export const UPDATE_STUDENT_FAILURE = `UPDATE_STUDENT_FAILURE`
export const FIND_STUDENT_BY_ID_REQUEST = `FIND_STUDENT_BY_ID_REQUEST`
export const FIND_STUDENT_BY_ID_SUCCESS = `FIND_STUDENT_BY_ID_SUCCESS`
export const FIND_STUDENT_BY_ID_FAILURE = `FIND_STUDENT_BY_ID_FAILURE`

export const fetchStudentRequest = () => ({
    type: FETCH_STUDENT_REQUEST,
})

export const fetchStudentSuccess = (data) => ({
    type: FETCH_STUDENT_SUCCESS,
    payload: data,
})

export const fetchStudentFailure = (error) => ({
    type: FETCH_STUDENT_FAILURE,
    payload: error,
})

export const addStudentRequest = () => ({
    type: ADD_STUDENT_REQUEST,
})

export const addStudentSuccess = (data) => ({
    type: ADD_STUDENT_SUCCESS,
    payload: data,
})

export const addStudentFailure = (error) => ({
    type: ADD_STUDENT_FAILURE,
    payload: error,
})

export const findStudentRequest = () => ({
    type: FIND_STUDENT_REQUEST,
})

export const findStudentSuccess = (data) => ({
    type: FIND_STUDENT_SUCCESS,
    payload: data,
})

export const findStudentFailure = (error) => ({
    type: FIND_STUDENT_FAILURE,
    payload: error,
})

export const deleteStudentRequest = () => ({
    type: DELETE_STUDENT_REQUEST,
})

export const deleteStudentSuccess = (data) => ({
    type: DELETE_STUDENT_SUCCESS,
    payload: data
})

export const deleteStudentFailure = (error) => ({
    type: DELETE_STUDENT_FAILURE,
    payload: error
})

export const updateStudentRequest = () => ({
    type: UPDATE_STUDENT_REQUEST,
})

export const updateStudentSuccess = (data) => ({
    type: UPDATE_STUDENT_SUCCESS,
    payload: data,
})

export const updateStudentFailure = (error) => ({
    type: UPDATE_STUDENT_FAILURE,
    payload: error
})

export const findStudentByIdRequest = () => ({
    type: FIND_STUDENT_BY_ID_REQUEST,
})

export const findStudentByIdSuccess = (data) => ({
    type: FIND_STUDENT_BY_ID_SUCCESS,
    payload: data,
})

export const findStudentByIdFailure = (error) => ({
    type: FIND_STUDENT_BY_ID_FAILURE,
    payload: error,
})



export const fetchStudent = () => {
    return (dispatch) => {
        dispatch(fetchStudentRequest())
        return axios.get(`${LOCALHOST}/getStudent`)
            .then(res => dispatch(fetchStudentSuccess(res.data)))
            .catch(err => dispatch(fetchStudentFailure(err.message)))
    }
}

export const addStudent = ({ name, grade, medium, section }) => {
    return (dispatch) => {
        dispatch(addStudentRequest())
        return axios.post(`${LOCALHOST}/addStudent`, { name, grade, medium, section })
            .then(res => dispatch(addStudentSuccess(res.data)))
            .catch(err => dispatch(addStudentFailure(err.message)))
    }
}

export const findStudentName = ({ name }) => {
    return (dispatch) => {
        dispatch(findStudentRequest())
        return axios.get(`${LOCALHOST}/getByName?name=${name}`)
            .then(payload => dispatch(findStudentSuccess(payload.data)))
            .catch(error => dispatch(findStudentFailure(error.message)))
    }
}

export const findByIdStudent = ({ id }) => {
    return dispatch => {
        dispatch(findStudentByIdRequest())
        return axios.get(`${LOCALHOST}/findById?id=${id}`)
            .then(payload => dispatch(findStudentByIdSuccess(payload.data)))
            .catch(error => dispatch(findStudentByIdFailure(error.message)))
    }
}

export const updateStudent = ({ id, name, grade, medium, section }) => {
    return dispatch => {
        dispatch(updateStudentRequest())
        return axios.post(`${LOCALHOST}/updateStudent`, { id, name, grade, medium, section })
            .then(payload => dispatch(updateStudentSuccess(payload.data)))
            .catch(error => dispatch(updateStudentFailure(error.message)))
    }
}

export const deleteStudent = ({ id }) => {
    return dispatch => {
        dispatch(deleteStudentRequest())
        return axios.get(`${LOCALHOST}/deleteStudent?id=${id}`)
            .then(res => dispatch(deleteStudentSuccess(res.data)))
            .catch(err => dispatch(deleteStudentFailure(err.message)))
    }
}