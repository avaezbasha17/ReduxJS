import {
    FETCH_STUDENT_REQUEST,
    FETCH_STUDENT_SUCCESS,
    FETCH_STUDENT_FAILURE,
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAILURE,
    FIND_STUDENT_FAILURE,
    FIND_STUDENT_REQUEST,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAILURE,
    FIND_STUDENT_BY_ID_REQUEST,
    FIND_STUDENT_BY_ID_SUCCESS,
    FIND_STUDENT_SUCCESS,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS
} from './action'

const initialState = {
    name: "Student",
    loading: false,
    student: [],
    error: '',
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_REQUEST:
        case ADD_STUDENT_REQUEST:
        case FIND_STUDENT_REQUEST:
        case FIND_STUDENT_BY_ID_REQUEST:
        case UPDATE_STUDENT_REQUEST:
        case DELETE_STUDENT_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FETCH_STUDENT_SUCCESS:
            return {
                ...state,
                student: action.payload,
                loading: false,
                error: ''
            }

        case ADD_STUDENT_SUCCESS:
            return {
                ...state,
                student: [...state.student, action.payload],
                loading: false,
                error: ''
            }

        case FIND_STUDENT_SUCCESS:
            return {
                ...state,
                student: action.payload,
                loading: false,
                error: ""
            }

        case DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                student: state.student.filter(student => student.id !== action.payload),
                loading: false,
                error: ''
            }

        case FIND_STUDENT_BY_ID_SUCCESS:
            return {
                ...state,
                student: action.payload,
                loading: false,
                error: ''
            }

        case UPDATE_STUDENT_SUCCESS:
            return {
                ...state,
                student: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_STUDENT_FAILURE:
        case ADD_STUDENT_FAILURE:
        case FIND_STUDENT_FAILURE:
        case DELETE_STUDENT_FAILURE:
            return {
                ...state,
                student: [],
                loading: false,
                error: action.error,
            }

        default:
            return state;
    }
}

export default studentReducer;