import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudents, fetchStudents } from "../redux/StudentSlice";
import { useNavigate } from 'react-router-dom'



const StudentList = () => {

const navigate = useNavigate()   

const dispatch=useDispatch()

const {students,loading,error} = useSelector((state)=> state.students)

useEffect(()=>{
    dispatch(fetchStudents())
},[dispatch])



  return (
    <div className="student-page">

      <div className="student-header">
        <div>
          <h1>Student Management</h1>
          <p>Manage all students in one place</p>
        </div>

        <button className="add-btn" onClick={()=> navigate('/add-student')}>
          + Add Student
        </button>
      </div>

      <div className="student-grid">

       {
        students.map((student)=>(
             <div className="student-card">
          <div className="student-avatar">{student.name.charAt(0)}</div>

          <div className="student-info">
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            <span>{student.email}</span>
          </div>

          <div className="card-actions">
            <button className="view-btn" onClick={()=> navigate(`/view-student/${student.id}`)}>View</button>
            <button className="edit-btn" onClick={()=> navigate(`/edit-student/${student.id}`)}>Edit</button>
          </div>
        </div>
        ))
       }

      </div>

    </div>
  );
};

export default StudentList;