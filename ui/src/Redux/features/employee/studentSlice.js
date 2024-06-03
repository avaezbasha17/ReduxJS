import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    name: "Student",
    loading: false,
    student: [],
    error: '',
};

const studentSlice = createSlice({
    name: "Student",
    initialState,
    reducers: {
        fetchStudentRequest: (state) => {
            state.loading = true;
        },
        fetchStudentSuccess: (state, action) => {
            state.loading = false;
            state.student = action.payload;
        },
        fetchStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addStudentRequest: (state) => {
            state.loading = true;
        },
        addStudentSuccess: (state, action) => {
            state.loading = false;
                state.student = action.payload;
        },
        addStudentFailure: (state, action) => {
            state.loading = false;;
                state.error = action.payload;
        },
        findStudentRequest: (state) => {
            state.loading = true;
        },
        findStudentSuccess: (state, action) => {
            state.loading = false;
                state.student = action.payload;
        },
        findStudentFailure: (state, action) => {
            state.loading=false;
            state.student=action.payload;
        },
        deleteStudentRequest:(state)=>{
            state.loading=true;
        },
        deleteStudentSuccess:(state,action)=>{
            state.loading=false;
            state.loading=action.payload;
        },
        deleteStudentFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        updateStudentRequest:(state)=>{
            state.loading=true;
        },
        updateStudentSuccess:(state,action)=>{
            state.loading=false;
            state.student=action.payload;
        },
        updateStudentFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        findStudentByIdRequest:(state)=>{
            state.loading=true;
        },
        findStudentByIdSuccess:(state,action)=>{
            state.loading=false;
            state.student=action.payload;
        },
        findStudentByIdFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})

export default studentSlice