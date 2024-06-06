import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    name: "Student",
    loading: false,
    student: [],
    error: '',
    status:0,
};

const studentSlice = createSlice({
    name: "Student",
    initialState,
    reducers: {
        fetchStudentRequest: (state) => {
            state.loading = true;
            state.status=102
        },
        fetchStudentSuccess: (state, action) => {
            state.loading = false;
            state.student = action.payload;
            state.status=200;
        },
        fetchStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.status=404
        },
        addStudentRequest: (state) => {
            state.loading = true;
            state.status=102
        },
        addStudentSuccess: (state, action) => {
            state.loading = false;
                state.student = action.payload;
                state.status=200;
        },
        addStudentFailure: (state, action) => {
            state.loading = false;;
                state.error = action.payload;
                state.status=404
        },
        findStudentRequest: (state) => {
            state.loading = true;
            state.status=102;
        },
        findStudentSuccess: (state, action) => {
            state.loading = false;
                state.student = action.payload;
                state.status=200;
        },
        findStudentFailure: (state, action) => {
            state.loading=false;
            state.error=action.payload;
            state.status=404
        },
        deleteStudentRequest:(state)=>{
            state.loading=true;
            state.status=102;
        },
        deleteStudentSuccess:(state,action)=>{
            state.loading=false;
            state.student=action.payload;
            state.status=200;
        },
        deleteStudentFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.status=404
        },
        updateStudentRequest:(state)=>{
            state.loading=true;
            state.status=102;
        },
        updateStudentSuccess:(state,action)=>{
            state.loading=false;
            state.student=action.payload;
            state.status=200;
        },
        updateStudentFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.status=404
        },
        findStudentByIdRequest:(state)=>{
            state.loading=true;
            state.status=102;
        },
        findStudentByIdSuccess:(state,action)=>{
            state.loading=false;
            state.student=action.payload;
            state.status=200;
        },
        findStudentByIdFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.status=404
        }
    }
})

export default studentSlice