import React from 'react'
import AddEmp from './AddEmp'
import ViewEmp from './ViewEmp'
import EditEmp from './EditEmp'
import Home from './Home'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='text-center'>
      <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addemp" element={<AddEmp/>}></Route>
          <Route path="/viewemp/:id" element={<ViewEmp/>}></Route>
          <Route path="editemp/:eid" element={<EditEmp/>}></Route>
        </Routes>
    </div>
  )
}

export default Header
