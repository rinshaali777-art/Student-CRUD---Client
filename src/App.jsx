import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentList from './Pages/StudentList'
import AddStudent from './Pages/AddStudent'
import StudentDetails from './Pages/StudentDetails'
import EditStudent from './Pages/EditStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
      <Route path='/' element={<StudentList/>}/>
      <Route path='/add-student' element={<AddStudent/>}/>
      <Route path='/view-student/:id' element={<StudentDetails/>}/>
      <Route path='/edit-student/:id' element={<EditStudent/>}/>
      {/* <Route path='/*' element={<Pnf/>}/> */}
   </Routes>

   </>
  )
}

export default App
