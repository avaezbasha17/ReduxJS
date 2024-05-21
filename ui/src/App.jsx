import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Redux from './Redux/Redux'
import store from './Redux/app/store'
import { Provider } from 'react-redux';
import UpdateStudent from './Redux/UpdateStudent'

const App = () => {
  return (
    <div>
        <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Redux />} path='/' />
            <Route element={<UpdateStudent />} path='/updateStudent' />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App