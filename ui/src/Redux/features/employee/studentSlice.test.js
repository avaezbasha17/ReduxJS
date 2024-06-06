import { describe, it, expect } from 'vitest'
import studentSlice from './studentSlice';
import { fetchStudent } from './action';

const initialState = {
    name: "Student",
    loading: false,
    student: [],
    error: '',
    status: 0,
};
const reducer = studentSlice.reducer
const { fetchStudentRequest, fetchStudentFailure, fetchStudentSuccess, addStudentRequest, addStudentSuccess, addStudentFailure, updateStudentFailure,updateStudentRequest,updateStudentSuccess,findStudentByIdFailure,findStudentByIdRequest,findStudentByIdSuccess, findStudentFailure,findStudentRequest,findStudentSuccess, deleteStudentFailure,deleteStudentRequest,deleteStudentSuccess } = studentSlice.actions

describe("studentSlice", () => {
    it("fetchStudentRequest", () => {
        const expectedResponse = {
            ...initialState,
            loading: true,
            status: 102
        }
        expect(reducer(initialState, fetchStudentRequest())).toEqual(expectedResponse)
    })

    it("fetchStudentSuccess", () => {
        const payload = { id: 1, name: "Avaez Basha T M", grade: "12th", medium: "English", section: "A" }
        const expectedResponse = {
            ...initialState,
            loading: false,
            student: payload,
            status: 200
        }
        expect(reducer(initialState, fetchStudentSuccess(payload))).toEqual(expectedResponse)
    })

    it("fetchStudentFailure",()=>{
        const payload = `Request failed with status code 404`
        const expectedResponse = {
            ...initialState,
            loading: false,
            error: payload,
            status: 404
        }
        expect(reducer(initialState,fetchStudentFailure(payload))).toEqual(expectedResponse)
    })

    it("addStudentRequest", () => {
        const expectedResponse = {
            ...initialState,
            loading: true,
            status: 102
        }
        expect(reducer(initialState, addStudentRequest())).toEqual(expectedResponse)
    })

    it("addStudentSuccess", () => {
        const payload = { id: 1, name: "Avaez Basha T M", grade: "12th", medium: "English", section: "A" }
        const expectedResponse = {
            ...initialState,
            loading: false,
            student: payload,
            status: 200
        }
        expect(reducer(initialState, addStudentSuccess(payload))).toEqual(expectedResponse)
    })

    it("addStudentFailure",()=>{
        const payload = `Request failed with status code 404`
        const expectedResponse = {
            ...initialState,
            loading: false,
            error: payload,
            status: 404
        }
        expect(reducer(initialState,addStudentFailure(payload))).toEqual(expectedResponse)
    })

    it("updateStudentRequest", () => {
        const expectedResponse = {
            ...initialState,
            loading: true,
            status: 102
        }
        expect(reducer(initialState, updateStudentRequest())).toEqual(expectedResponse)
    })

    it("updateStudentSuccess", () => {
        const payload = { id: 1, name: "Avaez Basha T M", grade: "12th", medium: "English", section: "A" }
        const expectedResponse = {
            ...initialState,
            loading: false,
            student: payload,
            status: 200
        }
        expect(reducer(initialState, updateStudentSuccess(payload))).toEqual(expectedResponse)
    })

    it("updateStudentFailure",()=>{
        const payload = `Request failed with status code 404`
        const expectedResponse = {
            ...initialState,
            loading: false,
            error: payload,
            status: 404
        }
        expect(reducer(initialState,updateStudentFailure(payload))).toEqual(expectedResponse)
    })

    it("findStudentRequest", () => {
        const expectedResponse = {
            ...initialState,
            loading: true,
            status: 102
        }
        expect(reducer(initialState, findStudentRequest())).toEqual(expectedResponse)
    })

    it("findStudentSuccess", () => {
        const payload = { id: 1}
        const expectedResponse = {
            ...initialState,
            loading: false,
            student: payload,
            status: 200
        }
        expect(reducer(initialState, findStudentSuccess(payload))).toEqual(expectedResponse)
    })

    it("findStudentFailure",()=>{
        const payload = `Request failed with status code 404`
        const expectedResponse = {
            ...initialState,
            loading: false,
            error: payload,
            status: 404
        }
        expect(reducer(initialState,findStudentFailure(payload))).toEqual(expectedResponse)
    })

    it("findStudentByIdRequest", () => {
        const expectedResponse = {
            ...initialState,
            loading: true,
            status: 102
        }
        expect(reducer(initialState, findStudentByIdRequest())).toEqual(expectedResponse)
    })

    it("findStudentByIdSuccess", () => {
        const payload = { id: 1}
        const expectedResponse = {
            ...initialState,
            loading: false,
            student: payload,
            status: 200
        }
        expect(reducer(initialState, findStudentByIdSuccess(payload))).toEqual(expectedResponse)
    })

    it("findStudentByIdFailure",()=>{
        const payload = `Request failed with status code 404`
        const expectedResponse = {
            ...initialState,
            loading: false,
            error: payload,
            status: 404
        }
        expect(reducer(initialState,findStudentByIdFailure(payload))).toEqual(expectedResponse)
    })

    it("deleteStudentByRequest", () => {
        const expectedResponse = {
            ...initialState,
            loading: true,
            status: 102
        }
        expect(reducer(initialState, deleteStudentRequest())).toEqual(expectedResponse)
    })

    it("deleteStudentByIdSuccess", () => {
        const payload = { id: 1}
        const expectedResponse = {
            ...initialState,
            loading: false,
            student: payload,
            status: 200
        }
        expect(reducer(initialState, deleteStudentSuccess(payload))).toEqual(expectedResponse)
    })

    it("deleteStudentByIdFailure",()=>{
        const payload = `Request failed with status code 404`
        const expectedResponse = {
            ...initialState,
            loading: false,
            error: payload,
            status: 404
        }
        expect(reducer(initialState,deleteStudentFailure(payload))).toEqual(expectedResponse)
    })
})