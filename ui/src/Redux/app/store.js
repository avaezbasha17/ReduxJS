import { configureStore } from '@reduxjs/toolkit'
import studentSlice from '../features/employee/studentSlice'

const store = configureStore({
    reducer: studentSlice.reducer
})

export default store