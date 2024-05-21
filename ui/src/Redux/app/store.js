import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../features/employee/studentSlice'

const store = configureStore({
    reducer: studentReducer
})

export default store